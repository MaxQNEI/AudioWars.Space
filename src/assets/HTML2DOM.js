window.HTML2DOM = (html, appendTo) => {
  const div = document.createElement('div');
  div.style.display = 'none';
  div.innerHTML = html;

  const children = Object.values(div.children);

  appendTo && children.forEach((child) => {
    appendTo.appendChild(child);
  });

  return children;
};
