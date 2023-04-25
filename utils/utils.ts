const titleCase = (word: string) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export { titleCase };
