import { blog } from "@/lib/source";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogIndex() {
  const posts = blog.getPages().sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="mb-20">
        <p className="type-caps mb-4 text-fd-muted-foreground">Journal</p>
        <h1 className="type-display">Experiments</h1>
        <p className="type-h4 mt-6 max-w-lg text-fd-muted-foreground">
          Documenting UI explorations, interaction patterns, and design
          prototypes.
        </p>
      </header>

      <div className="divide-y divide-fd-border">
        {posts.map((post, index) => (
          <article key={post.url} className="group">
            <Link
              href={post.url}
              className="flex items-start gap-6 py-8 md:py-10 transition-colors hover:opacity-80"
            >
              {/* Index number */}
              <span className="type-caption text-fd-muted-foreground pt-1.5 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {post.data.date && (
                  <time className="type-caption text-fd-muted-foreground">
                    {new Date(post.data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                )}
                <h2 className="type-h2 mt-1">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-2 text-fd-muted-foreground leading-relaxed max-w-xl">
                    {post.data.description}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <ArrowRight className="h-5 w-5 text-fd-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-2 shrink-0" />
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="type-body text-fd-muted-foreground">
          No experiments yet. Add an .mdx file to content/blog/ to get started.
        </p>
      )}
    </main>
  );
}
