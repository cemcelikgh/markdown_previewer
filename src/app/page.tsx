'use client';

import Editor from "@/components/Editor";
import Preview from "@/components/preview";
import { useSelector } from "react-redux";
import { selectDisplay } from "@/lib/features/displaySlice";

export default function Home() {

  const display = useSelector(selectDisplay);

  return (
    <main>
      {display.editor === true
        ? <Editor />
        : null
      }
      {display.previewer === true
        ? <Preview />
        : null
      }
    </main>
  );
}
