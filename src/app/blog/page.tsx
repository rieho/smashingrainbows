import { blog } from "@/lib/source";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function BlogIndex() {
  const posts = blog.getPages().sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16">
        <p className="type-caps mb-4 text-fd-muted-foreground">Journal</p>
        <h1 className="type-display">Experiments</h1>
        <p className="type-h4 mt-4 text-fd-muted-foreground">
          Documenting UI explorations, interaction patterns, and design
          prototypes.
        </p>
      </header>

      <Separator className="mb-12" />

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.url}>
            <Link href={post.url} className="group block">
              {post.data.date && (
                <time className="type-caption text-fd-muted-foreground">
                  {new Date(post.data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              <h2 className="type-h2 mt-1 group-hover:text-fd-primary/70 transition-colors">
                {post.data.title}
              </h2>
              {post.data.description && (
                <p className="mt-2 text-fd-muted-foreground">
                  {post.data.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
