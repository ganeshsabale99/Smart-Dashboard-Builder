export const saveLayout = (name, widgets) => {
  const layouts = JSON.parse(localStorage.getItem('layouts') || '{}');
  layouts[name] = widgets;
  localStorage.setItem('layouts', JSON.stringify(layouts));
};

export const loadLayout = (name) => {
  const layouts = JSON.parse(localStorage.getItem('layouts') || '{}');
  return layouts[name] || [];
};
