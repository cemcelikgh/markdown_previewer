import domToReact from "html-react-parser/lib/dom-to-react";

export type Element = ReturnType<typeof domToReact>;

export interface Size {
    icon: 'fa-expand' | 'fa-compress';
    area: undefined | { minHeight: '90vh' };
  };
