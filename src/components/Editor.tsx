'use client';

import { selectDisplay, togglePreviewerDisplay }
  from "@/lib/features/displaySlice";
import { selectText, setText } from "@/lib/features/text/textSlice";
import { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

function Editor() {

  const dispatch = useAppDispatch();
  const text = useAppSelector(selectText);
  const display = useAppSelector(selectDisplay);
  const [size, setSize] = useState({
    icon: 'fa-expand',
    area: undefined as undefined | { minHeight: string },
  });

  function handleToggle () {
    if (display.previewer === true) {
      setSize({
        icon: 'fa-compress',
        area: { minHeight: '90vh' },
      });
      dispatch(togglePreviewerDisplay(false));
    } else {
      setSize({
        icon: 'fa-expand',
        area: undefined,
      });
      dispatch(togglePreviewerDisplay(true));
    };
  };

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(setText(event.target.value));
  };

  return (
    <section id="editor-section">
      <div className='top-bar'>
        <div className='top-bar-left'>
          <i className="fa-regular fa-keyboard"></i>
        </div>
        <i className={`fa-solid ${size.icon}`}
          onClick={handleToggle}
        ></i>
      </div>
      <textarea id="editor"
        style={size.area}
        value={text}
        onChange={handleChange}
      ></textarea>
    </section>
  );

}

export default Editor;
