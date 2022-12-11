export const pluralize = (count, { one, many }) => {
  return `${count} ${count > 1 ? many : one}`;
};

export const clearContent = (contentElement) => {
  contentElement.innerHTML = '';
};