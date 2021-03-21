const dataPrettifyer = (dateStr, divider = ".") => {
  const date = new Date(dateStr);
  return `${date.getDate()}${divider}${
    date.getMonth() + 1
  }${divider}${date.getFullYear()}`;
};

export default dataPrettifyer;
