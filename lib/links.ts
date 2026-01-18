export const siteLinks = {
  home: "https://alinyxe.online",
  documentation: "https://alinyxe.online/documentation",
  contact: "https://alinyxe.online/contact",  // simulate subdomain
  faq: "https://alinyxe.online/faq",          // simulate subdomain
};

export function getLink(key: keyof typeof siteLinks) {
  return siteLinks[key];
}
