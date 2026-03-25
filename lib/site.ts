const DEFAULT_SITE_URL = "https://tipster-demo.vercel.app";

function normalizeSiteUrl(value?: string | null) {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  const withProtocol = trimmedValue.startsWith("http")
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    return new URL(withProtocol);
  } catch {
    return null;
  }
}

export function getSiteUrl() {
  return (
    normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeSiteUrl(process.env.SITE_URL) ??
    normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalizeSiteUrl(process.env.VERCEL_URL) ??
    new URL(DEFAULT_SITE_URL)
  );
}
