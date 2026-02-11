"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { aquaBlue } from "@codesandbox/sandpack-themes";

interface PlaygroundProps {
  files?: Record<string, string>;
  template?: "react" | "react-ts" | "vanilla" | "vanilla-ts" | "static";
  showPreview?: boolean;
  showEditor?: boolean;
  editorHeight?: number;
}

export function Playground({
  files,
  template = "react",
  showPreview = true,
  showEditor = true,
  editorHeight = 350,
}: PlaygroundProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-fd-border">
      <SandpackProvider template={template} files={files} theme={aquaBlue}>
        <SandpackLayout>
          {showEditor && (
            <SandpackCodeEditor
              showLineNumbers
              showTabs
              style={{ height: editorHeight }}
            />
          )}
          {showPreview && <SandpackPreview style={{ height: editorHeight }} />}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
