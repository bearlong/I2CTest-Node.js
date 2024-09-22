import express from "express";
const router = express.Router();
import { UserManager } from "../UserManager.mjs";
import multer from "multer";

const upload = multer();
const userManager = new UserManager();

// 路徑POST /api/users：新增用戶（用戶資料包含 id, name, age）。
router.post("/", upload.none(), (req, res) => {
  try {
    // 從body內取得User資料
    const { id, name, age } = req.body;
    // 檢查是否有缺少的User資料
    if (!id || !name || !age) {
      return res.status(400).json({ message: "請填入完整的用戶資料" });
    }

    // 確認 age 是否為數字
    if (isNaN(age)) {
      return res.status(400).json({ message: "年齡必須為數字" });
    }

    // 建立User
    const newUser = { id, name, age };
    // 新增User
    userManager.addUser(newUser);
    res.status(201).json({ message: "新增成功", user: newUser });
  } catch (error) {
    // 處理錯誤
    res.status(500).json({ message: "伺服器錯誤", error: error.message });
  }
});

// 路徑GET /api/users：取得所有用戶列表。
router.get("/", (req, res) => {
  try {
    // 取得所有用戶列表
    const userList = userManager.getUsers();
    res.status(200).json({ userList });
  } catch (error) {
    res.status(500).json({ message: "伺服器錯誤", error: error.message });
  }
});

// 路徑DELETE /api/users/:id：根據 id 刪除指定用戶。

router.delete("/:id", (req, res) => {
  // 取得id
  const { id } = req.params;
  try {
    // 使用 userManager 刪除指定user
    const deletedUser = userManager.deleteUser(id);
    // 檢查user是否存在
    if (!deletedUser) {
      return res.status(404).json({ message: "用戶不存在" });
    }
    res.status(200).json({ message: "刪除成功", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "伺服器錯誤", error: error.message });
  }
});

export default router;
