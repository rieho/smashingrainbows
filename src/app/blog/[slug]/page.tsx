import { blog } from "@/lib/source";
import { getMDXComponents } from "@/components/mdx/components";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="type-small inline-flex items-center gap-1.5 text-fd-muted-foreground hover:text-fd-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to experiments
      </Link>

      <header className="mb-12">
        {page.data.date && (
          <time className="type-caption text-fd-muted-foreground">
            {new Date(page.data.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        <h1 className="type-h1 mt-2">{page.data.title}</h1>
        {page.data.description && (
          <p className="type-h4 mt-3 text-fd-muted-foreground">
            {page.data.description}
          </p>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent components={getMDXComponents()} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blog.getPages().map((page) => ({ slug: page.slugs[0] }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
