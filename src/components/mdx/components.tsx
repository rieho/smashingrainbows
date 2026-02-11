import defaultMdxComponents from "fumadocs-ui/mdx";
import { Playground } from "./sandpack";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Playground,
    ...components,
  };
}
