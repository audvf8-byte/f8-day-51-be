const postsModel = require("../models/post.model");

const getAll = async (_req, res) => {
  const data = await postsModel.findAll();
  res.success(data);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const data = await postsModel.findOne(id);
  if (!data) {
    return res.error("Không có dữ liệu", null, 404);
  }
  res.success(data);
};

const createOne = async (req, res) => {
  const { title, content } = req.body;
  const newPost = await postsModel.createOne(title, content);
  res.success(newPost, "Thêm mới thành công", 201);
};

const updateOne = async (req, res) => {
  const { id } = req.params;

  const hasPost = await postsModel.findOne(id);
  if (!hasPost) {
    return res.error("Không có dữ liệu", null, 404);
  }
  const { title, content } = req.body;
  const updatePost = await postsModel.updateOne(id, title, content);
  res.success(updatePost, "Cập nhật thành công");
};

const deleteOne = async (req, res) => {
  const { id } = req.params;

  const hasPost = await postsModel.findOne(id);
  if (!hasPost) {
    return res.error("Không có dữ liệu", null, 404);
  }

  // Xử lý response riêng khi xóa thành công. Chỉ trả về statuscode 204
  await postsModel.deleteOne(id);
  res.status(204).send();
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
