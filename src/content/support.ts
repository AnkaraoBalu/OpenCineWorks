/** Public hosted checkout URL. Never put provider API keys in the website. */
const configured = process.env.NEXT_PUBLIC_DONATION_URL?.trim();
function checkoutUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
export const donationUrl = checkoutUrl(configured);
