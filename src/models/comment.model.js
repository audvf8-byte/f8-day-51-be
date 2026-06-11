const db = require("../utils/jsonDB");

const findAll = async () => {
  const data = await db.loadDB("comments");
  return data;
};

const findOne = async (id) => {
  const data = await db.loadDB("comments");
  return data.find((item) => item.id === +id);
};

const createOne = async (postId, content) => {
  const data = await db.loadDB("comments");

  let newId = 1;
  if (data.length > 0) {
    // Tức có bản ghi
    const lastId = data[data.length - 1].id;
    newId = +lastId + 1;
  }

  const newComment = {
    id: newId,
    postId,
    content,
    createdAt: new Date(),
  };

  // Thêm newPost vào data
  data.push(newComment);

  // Lưu vào db
  await db.saveDB("comments", data);

  return newComment;
};

const updateOne = async (id, content) => {
  const data = await db.loadDB("comments");
  const index = data.findIndex((item) => item.id === +id);
  if (index === -1) {
    return null;
  }
  data[index] = { ...data[index], content };
  await db.saveDB("comments", data);
  return data[index];
};

const deleteOne = async (id) => {
  const data = await db.loadDB("comments");
  const index = data.findIndex((item) => item.id === +id);
  if (index === -1) {
    return null;
  }
  data.splice(index, 1);
  await db.saveDB("comments", data);
  return data[index];
};

module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
