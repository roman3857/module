const makeMarkup = (array) => {
  return array
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");
};

export { makeMarkup };
