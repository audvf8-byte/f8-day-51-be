const db = require("../utils/jsonDB");

const findAll = async () => {
  const data = await db.loadDB("posts");
  return data;
};

const findOne = async (id) => {
  const data = await db.loadDB("posts");
  return data.find((item) => item.id === +id);
};

const createOne = async (title, content) => {
  const data = await db.loadDB("posts");

  let newId = 1;
  if (data.length > 0) {
    // Tức có bản ghi
    const lastId = data[data.length - 1].id;
    newId = +lastId + 1;
  }

  const newPost = {
    id: newId,
    title,
    content,
    createdAt: new Date(),
  };

  // Thêm newPost vào data
  data.push(newPost);

  // Lưu vào db
  await db.saveDB("posts", data);

  return newPost;
};

const updateOne = async (id, title, content) => {
  const data = await db.loadDB("posts");
  const index = data.findIndex((item) => item.id === +id);
  if (index === -1) {
    return null;
  }
  data[index] = { ...data[index], title, content };
  await db.saveDB("posts", data);
  return data[index];
};

const deleteOne = async (id) => {
  const data = await db.loadDB("posts");
  const index = data.findIndex((item) => item.id === +id);
  if (index === -1) {
    return null;
  }
  data.splice(index, 1);
  await db.saveDB("posts", data);
  return data[index];
};

module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
