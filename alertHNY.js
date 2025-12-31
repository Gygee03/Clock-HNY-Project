updateImage = () => {
  const imgElement = document.getElementById("imgHNY");
  let checkHNY = false;
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  let fullYear = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // console.log(typeof fullYear)

  if (
    date === 1 &&
    month === 0 &&
    fullYear === 2026 &&
    h === 0 &&
    m === 0 &&
    s === 0
  ) {
    imgElement.src =
      "images/wired-outline-2982-sign-happy-new-year-loop-cycle.gif";
  } else {
    imgElement.src = "images/wired-outline-212-arrow-1-rounded-loop-cycle.gif";
  }
};
setInterval(updateImage, 1000);
