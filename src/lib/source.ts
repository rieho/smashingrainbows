import { loader } from "fumadocs-core/source";
import { docs as docsCollection, blog as blogCollection } from "@/.source/server";

export const docs = loader({
  baseUrl: "/docs",
  source: docsCollection.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: "/blog",
  source: blogCollection.toFumadocsSource(),
});
