import { docs } from "@/lib/source";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { getMDXComponents } from "@/components/mdx/components";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = docs.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <h1 className="type-h1">{page.data.title}</h1>
        {page.data.description && (
          <p className="type-h4 mt-2 text-fd-muted-foreground">
            {page.data.description}
          </p>
        )}
        <MDXContent components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docs.getPages().map((page) => ({ slug: page.slugs }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = docs.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
