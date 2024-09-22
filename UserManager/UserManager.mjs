export class UserManager {
  constructor() {
    this.users = [];
    // 用戶資料儲存在資料庫或陣列中
  }

  addUser(user) {
    // 判斷用戶是否存在於用戶列表內
    if (this.users.find((u) => u.id === user.id)) {
      throw new Error("用戶已存在");
    }
    // 新增用戶
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
    // 資料庫或陣列中取得資料
  }

  deleteUser(id) {
    //判斷用戶列表內有無該用戶
    const index = this.users.findIndex((u) => Number(u.id) === Number(id));
    if (index === -1) {
      return;
    }
    // 根據 id 刪除用戶
    this.users.splice(index, 1);
    return `刪除成功 id為 ${id}`;
  }
}
