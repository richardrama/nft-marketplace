function toggle() {
    var toggleBtn = document.getElementById("toggleBtn");
    var on = document.getElementById("on");
    var off = document.getElementById("off");
  
    if (toggleBtn.style.left === "0px") {
      toggleBtn.style.left = "50%";
      setTimeout(() => {
        on.style.color = "black";
        off.style.color = "white";
      }, 400);
    } else {
      toggleBtn.style.left = "0";
      setTimeout(() => {
        on.style.color = "white";
        off.style.color = "black";
      }, 400);
    }
  }
  