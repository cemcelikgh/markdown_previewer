'use client';

import './previewer.css'
import { selectDisplay, toggleEditorDisplay }
  from '@/lib/features/displaySlice';
import { selectText } from '@/lib/features/textSlice/textSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { marked } from 'marked';
import parse from 'html-react-parser';
import { Element } from '@/types/types';

marked.use( { breaks: true, gfm: true } );

function Previewer() {

  const dispatch = useAppDispatch();
  const text = useAppSelector(selectText);
  const display = useAppSelector(selectDisplay);
  const [icon, setIcon] = useState('fa-expand');
  const [element, setElement] = useState<Element | null>(null);

  function handleToggle () {
    if (display.editor === true) {
      setIcon('fa-compress');
      dispatch(toggleEditorDisplay(false));
    } else {
      setIcon('fa-expand');
      dispatch(toggleEditorDisplay(true));
    };
  };

  useEffect(() => {
    (async () => {
      const htmlString = await marked.parse(text);
      setElement(parse(htmlString));
    })();
  }, [text]);

  return (
    <section id="previewer-section">
      <div className='top-bar'>
        <div className='top-bar-left'>
          <i className="fa-solid fa-display"></i>
        </div>
        <i className={`fa-solid ${icon}`}
          onClick={handleToggle}
        ></i>
      </div>
      <div id="previewer">
        {element}
      </div>
    </section>
  );

}

export default Previewer;
