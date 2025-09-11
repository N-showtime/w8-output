document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // ページ読み込み時に localStorage から読み込み
  if (localStorage.getItem("email")) {
    emailInput.value = localStorage.getItem("email");
  }
  if (localStorage.getItem("password")) {
    passwordInput.value = localStorage.getItem("password");
  }

  // フォーム送信時に localStorage に保存
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // ← デモ用。

    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);

    alert("ログイン情報を保存しました");

  });
});
