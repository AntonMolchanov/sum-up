const dataPrettifyer = (dateStr, divider = ".") => {
  const date = new Date(dateStr);
  return `${date.getDay()}${divider}${date.getMonth()}${divider}${date.getFullYear()}`;
};

export default dataPrettifyer;
