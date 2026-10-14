'use client';

import { Element } from '@/types/types';
import { marked } from 'marked';
import { selectDisplay, toggleEditorDisplay }
  from '@/lib/features/displaySlice';
import { selectText } from '@/lib/features/textSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import './previewer.css';

marked.use( { breaks: true, gfm: true } );

function Previewer() {

  const [element, setElement] = useState<Element | null>(null);
  const [icon, setIcon] = useState('fa-expand');
  const display = useAppSelector(selectDisplay);
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();

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
          <i className="fa-solid fa-display" />
        </div>
        <i
          className={`fa-solid ${icon}`}
          onClick={handleToggle}
        />
      </div>
      <div id="previewer">
        {element}
      </div>
    </section>
  );

}

export default Previewer;
