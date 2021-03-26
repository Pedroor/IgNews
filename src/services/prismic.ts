import Prismic from "@prismicio/client";

export function getPrismicCliete(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ACCESS_TOKEN, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
