import { questions } from "@/data/questions";
import { enSavoir } from "@/data/enSavoir";
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alinyxe.online";

  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/documentation`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
  ];

  const questionUrls = questions.map(q => ({
    url: `${baseUrl}/produits/${q.slug}`,
    lastModified: new Date(),
  }));

  const enSavoirUrls = enSavoir.map(q => ({
    url: `${baseUrl}/en-savoir/${q.slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...questionUrls, ...enSavoirUrls];
}