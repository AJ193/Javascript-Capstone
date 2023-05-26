const countItems = async (data) => {
  const limit = 12;
  let counter = 0;

  data.forEach((_item, i) => {
    if (i < limit) {
      counter += 1;
    }
  });
  return counter;
};

module.exports = countItems;