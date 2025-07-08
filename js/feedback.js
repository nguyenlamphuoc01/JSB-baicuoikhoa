document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }
  alert("Feedback của bạn đã được gửi thành công, cảm ơn bạn!");
  document.getElementById("feedbackForm").reset();
});
