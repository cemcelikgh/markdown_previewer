'use client';

import './preview.css'
import { selectDisplay, toggleEditorDisplay }
  from '@/lib/features/displaySlice';
import { selectText } from '@/lib/features/text/textSlice';
import { JSX, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { marked } from 'marked';
import parse from 'html-react-parser';

marked.use({
  breaks: true,
  gfm: true
});

function Preview() {

  const display = useSelector(selectDisplay);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState('fa-expand');

  function handleToggle () {
    if (display.editor === true) {
      setIcon('fa-compress');
      dispatch(toggleEditorDisplay(false));
    } else {
      setIcon('fa-expand');
      dispatch(toggleEditorDisplay(true));
    }
  };

  const text = useSelector(selectText);
  const [element, setElement] = useState<JSX.Element>(<></>); 

  useEffect(() => {
    (async () => {
      const htmlString = await marked.parse(text);
      setElement(parse(htmlString) as JSX.Element);
    })();
  }, [text]);

  return (
    <section id="preview-section">
      <div className='top-bar'>
        <div className='top-bar-left'>
          <i className="fa-solid fa-display"></i>
        </div>
        <i className={`fa-solid ${icon}`}
          onClick={handleToggle}
        ></i>
      </div>
      <div id="preview">
        {element}
      </div>
    </section>
  );

};

export default Preview;
