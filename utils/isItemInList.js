const isItemInList = (id, list) => {
  return list.some((item) => item._id == id);
};

module.exports = { isItemInList };
