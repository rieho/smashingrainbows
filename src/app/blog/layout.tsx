import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: (
          <span className="font-semibold tracking-tight">Experiments</span>
        ),
      }}
      links={[
        { text: "Docs", url: "/docs" },
        { text: "Blog", url: "/blog", active: "nested-url" },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
