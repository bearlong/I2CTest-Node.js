import fs from "fs/promises";
import path from "path";

async function mergedUsers() {
  try {
    //讀取多個JSON資料
    const users = await Promise.all([
      fs.readFile(
        path.resolve(import.meta.dirname, "data", "users1.json"),
        "utf-8"
      ),
      fs.readFile(
        path.resolve(import.meta.dirname, "data", "users2.json"),
        "utf-8"
      ),
      fs.readFile(
        path.resolve(import.meta.dirname, "data", "users3.json"),
        "utf-8"
      ),
    ]);

    // 將每個檔案檔案展開成單一陣列
    const allUsers = users.flatMap((user) => JSON.parse(user));
    // 排序
    allUsers.sort((a, b) => a.id - b.id);

    // 合併產生的檔案路徑
    const mergedFilePath = path.resolve(
      import.meta.dirname,
      "merged_users.json"
    );
    let outputFilePath = mergedFilePath;
    let counter = 1;
    // 如果檔案已經存在，則在檔名後面附加數字避免覆蓋原檔案
    while (await isExists(outputFilePath)) {
      outputFilePath = path.resolve(
        import.meta.dirname,
        "merged_users" + `(${counter}).json`
      );
      counter++;
    }
    // 將合併且排序後的使用者資料寫入新檔案後輸出
    await fs.writeFile(outputFilePath, JSON.stringify(allUsers, null, 4));

    console.log(`${outputFilePath} 合併成功`);
  } catch (e) {
    console.log(e.message);
  }
}

// 確認檔案是否存在
async function isExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (e) {
    return false;
  }
}

mergedUsers();
