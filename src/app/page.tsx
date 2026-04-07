'use client';

import Editor from "@/components/Editor";
import Previewer from "@/components/previewer/Previewer";
import { useAppSelector } from "@/lib/hooks/hooks";
import { selectDisplay } from "@/lib/features/displaySlice";

function Home() {

  const display = useAppSelector(selectDisplay);

  return (
    <main>
      {display.editor === true
        ? <Editor />
        : null
      }
      {display.previewer === true
        ? <Previewer />
        : null
      }
    </main>
  );

}

export default Home;
