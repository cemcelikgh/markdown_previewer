'use client';

import Editor from "@/components/Editor";
import Previewer from "@/components/previewer/Previewer";
import { useAppSelector } from "@/lib/hooks";
import { selectDisplay } from "@/lib/features/displaySlice";

function Home() {

  const display = useAppSelector(selectDisplay);

  return (
    <main>
      {display.editor &&
      <Editor />}
      {display.previewer &&
      <Previewer />}
    </main>
  );

}

export default Home;
