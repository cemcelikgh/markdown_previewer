const previewTextCodes = `# Welcome to my React Markdown Previewer!

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)

### This line is a heading...

And here's some code, \`<div></div>\` , between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

## This is a sub-heading

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
     - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last
`;

export default previewTextCodes;
