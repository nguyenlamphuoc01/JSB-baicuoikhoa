document.addEventListener("DOMContentLoaded", function () {
  // Vừa vào sẽ hiện tầng trên cùng
  this.location.href = "#surface";
  changeDepth("surface");
});

const nav_link_list = document.querySelectorAll("nav a");
nav_link_list.forEach((link) => {
  link.addEventListener("click", function (e) {
    nav_link_list.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const sectionId = link.getAttribute("href").substring(1); // bỏ dấu #
    changeDepth(sectionId);
  });
});

function changeDepth(section_name) {
  const depth_label = document.getElementById("layer-depth");
  const depth_content = document.querySelector(`#${section_name}`).dataset
    .depth;
  depth_label.textContent = `${depth_content} km`;
}

// =================== Cập nhật link active khi scroll ========================
document.querySelector("main").addEventListener("scroll", function () {
  const scrollPosition = this.scrollTop;
  const currentSection = Math.round(scrollPosition / this.clientHeight);
  const navLinkList = document.querySelectorAll("nav a");

  navLinkList.forEach((link, index) => {
    if (index !== currentSection) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
});
