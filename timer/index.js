const timeInput = document.querySelector(".timeInput");
const timeValue = document.querySelector(".timeValue");
const timeDisplay = document.querySelector(".timeDisplay");
const btnStart = document.querySelector(".btnStart");
const btnReset = document.querySelector(".btnReset");
const progressBar = document.querySelector(".progress-bar");
// 儲存輸入的倒數時間
let timeSet = 0;
timeInput.addEventListener("input", (e) => {
  timeValue.textContent = parseInt(e.target.value);
  timeSet = parseInt(e.target.value);
});

btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  btnReset.disabled = true;
  // 呼叫 delay 函數開始倒數，結束時執行 .then
  delay(timeSet)
    .then(() => {
      progressBar.style.width = "100%";
      timeDisplay.textContent = "Done!";
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      btnStart.disabled = false;
      btnReset.disabled = false;
    });
});

btnReset.addEventListener("click", () => {
  timeDisplay.textContent = "";
  timeInput.value = 0;
  timeValue.textContent = 0;
  timeSet = 0;
  progressBar.style.width = "0%";
});

function delay(ms) {
  return new Promise((resolve) => {
    // 剩餘秒數
    let timeLeft = ms;
    // 初始化顯示時間與進度條
    timeDisplay.textContent = ms;
    progressBar.style.width = "0%";
    const countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown);
        resolve("Done!");
      } else {
        // 更新顯示的剩餘時間 (秒數和毫秒數)
        const s = Math.floor(timeLeft / 1000);
        const m = timeLeft % 1000;
        timeDisplay.textContent = `${s}.${m}`;
        // 更新進度條的寬度
        progressBar.style.width = `${((ms - timeLeft) / ms) * 100}%`;
        timeLeft -= 10;
      }
    }, 10);
  });
}
