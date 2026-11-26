export const CONFIG = {
  brand: 'SQI Wears', whatsapp: '2347064258647', phone: '07064258647',
  email: '', address: '', location: 'Nigeria',
  socials: { Instagram: '', Facebook: '', TikTok: '', X: '' },
  delivery: { Pickup: 0, 'Local Delivery': 2000, 'Nationwide Delivery': 5000 },
  // Demo delivery estimates. Confirm actual charges with SQI Wears.
  paymentEnabled: false, paystackPublicKey: '',
};
export const money = value => `₦${Number(value).toLocaleString('en-NG')}`;
export const enquiryUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hello SQI Wears, I would like to make an enquiry.')}`;
export function orderLink(order) {
  const lines = order.items.map((p, i) => `${i + 1}. ${p.name}\n   Size: ${p.size}\n   Colour: ${p.color}\n   Quantity: ${p.quantity}\n   Price: ${money(p.price)} each`);
  const c = order.customer || {};
  const message = `Hello SQI Wears, I would like to place an order.\n\nOrder ${order.number || ''}:\n\n${lines.join('\n\n')}\n\nSubtotal: ${money(order.subtotal)}\nDelivery: ${money(order.delivery)} (${order.deliveryOption || 'Pickup'})\nTotal: ${money(order.subtotal + order.delivery)}\n\nCustomer Name: ${c.name || 'To be confirmed'}\nPhone: ${c.phone || 'To be confirmed'}\nWhatsApp: ${c.whatsapp || 'To be confirmed'}\nEmail: ${c.email || 'To be confirmed'}\nDelivery Address: ${[c.address, c.city, c.state].filter(Boolean).join(', ') || 'To be confirmed'}\n\nPayment status: Not paid.\nPlease confirm my order, delivery charge and payment details.\n\nThank you.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
export function orderNumber() { return `SQI-${new Date().toISOString().slice(0,10).replaceAll('-', '')}-${crypto.randomUUID().slice(0,8).toUpperCase()}`; }