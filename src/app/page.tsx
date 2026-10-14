'use client';

import { selectDisplay } from "@/lib/features/displaySlice";
import { useAppSelector } from "@/lib/hooks";
import Editor from "@/components/Editor";
import Previewer from "@/components/previewer/Previewer";

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
