const commentsModel = require("../models/comment.model");

const getAll = async (_req, res) => {
  const data = await commentsModel.findAll();
  res.success(data);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const data = await commentsModel.findOne(id);
  if (!data) {
    return res.error("Không có dữ liệu", null, 404);
  }
  res.success(data);
};

const createOne = async (req, res) => {
  const { postId, content } = req.body;
  const newComment = await commentsModel.createOne(postId, content);
  res.success(newComment, "Thêm mới thành công", 201);
};

const updateOne = async (req, res) => {
  const { id } = req.params;

  const hasComment = await commentsModel.findOne(id);
  if (!hasComment) {
    return res.error("Không có dữ liệu", null, 404);
  }
  const { content } = req.body;
  const updateComment = await commentsModel.updateOne(id, content);
  res.success(updateComment, "Cập nhật thành công");
};

const deleteOne = async (req, res) => {
  const { id } = req.params;

  const hasComment = await commentsModel.findOne(id);
  if (!hasComment) {
    return res.error("Không có dữ liệu", null, 404);
  }

  // Xử lý response riêng khi xóa thành công. Chỉ trả về statuscode 204
  await commentsModel.deleteOne(id);
  res.status(204).send();
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
