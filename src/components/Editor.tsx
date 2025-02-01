'use client';

import { selectDisplay, togglePreviewerDisplay }
  from "@/lib/features/displaySlice";
import { selectText, setText } from "@/lib/features/text/textSlice";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Editor() {

  const display = useSelector(selectDisplay);
  const [size, setSize] = useState({
    icon: 'fa-expand',
    area: undefined as undefined | { minHeight: string }
  });
  const dispatch = useDispatch();
  const text = useSelector(selectText);

  function handleToggle () {
    if (display.previewer === true) {
      setSize({
        ...size,
        icon: 'fa-compress',
        area: { minHeight: '90vh' }
      });
      dispatch(togglePreviewerDisplay(false));
    } else {
      setSize({
        ...size,
        icon: 'fa-expand',
        area: undefined
      });
      dispatch(togglePreviewerDisplay(true));
    }
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
};

export default Editor;
