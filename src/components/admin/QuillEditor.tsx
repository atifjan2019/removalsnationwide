"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

/** Lightweight Quill (snow) rich-text editor. Quill is imported dynamically
 *  inside the effect so it never runs during SSR. */
export default function QuillEditor({ value, onChange }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);
  const onChangeRef = useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    if (initialised.current || !elRef.current) return;
    initialised.current = true;
    let cleanup = () => {};

    (async () => {
      const Quill = (await import("quill")).default;
      const quill = new Quill(elRef.current!, {
        theme: "snow",
        placeholder: "Write the content…",
        modules: {
          toolbar: [
            [{ header: [2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "link"],
            ["clean"],
          ],
        },
      });
      if (value) quill.clipboard.dangerouslyPasteHTML(value);
      const handler = () => onChangeRef.current(quill.root.innerHTML);
      quill.on("text-change", handler);
      cleanup = () => quill.off("text-change", handler);
    })();

    return () => cleanup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-lg border border-black/15 bg-white [&_.ql-container]:min-h-[260px] [&_.ql-container]:text-base [&_.ql-editor]:min-h-[260px]">
      <div ref={elRef} />
    </div>
  );
}
