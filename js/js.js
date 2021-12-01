const log = document.getElementById("login");
const reg = document.getElementById("reg");
const showLgn = document.getElementById("showLgn");
const showRg = document.getElementById("showRg");

showLgn.addEventListener("click", function () {

  if ((log.style.display = "none")) {
    log.style.display = "block";
    reg.style.display = "none";
  }
});

showRg.addEventListener("click", function () {

  if ((reg.style.display = "none")) {
    reg.style.display = "block";
    log.style.display = "none";
  }
});
