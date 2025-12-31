updateTime = () => {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  let h_cnt = 23 - h;
  let m_cnt = 59 - m;
  let s_cnt = 60 - s;

  m = checkTime(m);
  s = checkTime(s);
  m_cnt = checkTime(m_cnt);
  s_cnt = checkTime(s_cnt);

  let day = today.toLocaleString("default", { weekday: "short" });

  let dateNum = today.getDate();
  let shortMonth = today.toLocaleString("default", { month: "short" });
  let fullYear = today.getFullYear();

  if (fullYear < 2026) {
    document.getElementById("time_cnt").innerHTML =
      h_cnt + ":" + m_cnt + ":" + s_cnt;
  }
  else{
    document.getElementById("time_cnt").innerHTML =
      h + ":" + m + ":" + s;
  }

  
  document.getElementById("day").innerHTML =
    day + " " + dateNum + " " + shortMonth + " " + fullYear;
};
setInterval(updateTime, 1000);

checkTime = (num) => {
  if (num < 10) {
    num = "0" + num;
  }

  if (num === 60) {
    num = "00";
  }
  return num;
};
