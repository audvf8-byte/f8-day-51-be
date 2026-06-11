const fs = require("fs/promises");
const path = require("path");

async function loadDB(resourceName) {
  const pathname = path.join(__dirname, "../db", `${resourceName}.json`);
  try {
    const content = await fs.readFile(pathname, "utf8");
    const result = JSON.parse(content);
    return result;
  } catch (error) {
    if (error.code === "ENOENT") {
      // Lấy ra đường dẫn thư mục db
      const dirPath = path.dirname(pathname);

      // Tạo thư mục db nếu chưa có
      await fs.mkdir(dirPath, { recursive: true });

      // Tạo file json nếu chưa có. Mặc định []
      await fs.writeFile(pathname, "[]", "utf8");
      return [];
    }

    // Return [] nếu file không phải JSON hợp lệ
    return [];
  }
}

// async function run() {
//   const data = await loadDB("posts");
//   console.log(data);
// }
// run();

async function saveDB(resourceName, data) {
  const pathname = path.join(__dirname, "../db", `${resourceName}.json`);
  try {
    return await fs.writeFile(pathname, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      // Lấy ra đường dẫn thư mục db
      const dirPath = path.dirname(pathname);

      // Tạo thư mục db nếu chưa có
      await fs.mkdir(dirPath, { recursive: true });

      // Tạo file json với nội dung là data
      await fs.writeFile(pathname, JSON.stringify(data, null, 2), "utf8");
    }
  }
}

// async function run() {
//   return await saveDB("posts", [{ name: "Bé Mon Mặp 2", age: 18 }]);
// }
// run();

module.exports = { loadDB, saveDB };
