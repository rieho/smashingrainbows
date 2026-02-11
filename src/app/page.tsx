import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="type-caps mb-6 text-fd-muted-foreground">Design Lab</p>
        <h1 className="type-display">Experiments</h1>
        <p className="type-h3 mx-auto mt-8 max-w-xl text-fd-muted-foreground">
          A place to document UI explorations, interaction patterns, and design
          prototypes.
        </p>
        <div className="mt-14 flex items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">Read the journal</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs">Browse docs</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
