import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "379zn23b",   // 👈 from https://sanity.io/manage
  dataset: "production",        // default dataset
  apiVersion: "2025-08-16",     // use today’s date
  useCdn: true,                 // cache for faster response
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
