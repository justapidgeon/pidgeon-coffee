/**
 * Sends a notification to the owner when a new order is placed.
 * We use Discord Webhooks as a lightweight way to get push notifications on mobile.
 */
export async function sendOrderNotification(orderData) {
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
  
  if (!WEBHOOK_URL) {
    console.warn("Discord Webhook URL not found. Notification skipped.");
    return;
  }

  const itemsList = orderData.items.map(item => {
    const customizations = Object.entries(item.customizations)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join(', ');
    return `- **${item.name}** x${item.quantity} (${customizations})`;
  }).join('\n');

  const payload = {
    embeds: [{
      title: "☕ New Pidgeon Coffee Order!",
      color: 0xc8956c, // --accent color in decimal
      fields: [
        { name: "Order Summary", value: itemsList || "No items?" },
        { name: "Total Amount", value: `$${orderData.total}`, inline: true },
        { name: "Status", value: "Payment Pending (Venmo Redirected)", inline: true }
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "Pidgeon Coffee Digital Assistant" }
    }]
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Discord Webhook failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}
