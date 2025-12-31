let hnyTriggered = false;
controlButton = () => {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  if (
    date === 1 &&
    month === 0 &&
    year === 2026 &&
    h === 0 &&
    m === 0 &&
    s === 0 &&
    !hnyTriggered
  ) {
    hnyTriggered = true;

    const space = document.getElementById("space");
    space.textContent = "เย่ ปีใหม่แล้ว 🎉🎉";

    Swal.fire({
      title: "🎊 Happy New Year 2026 🎊",
      text: "ขอให้ user ทิ้งอะไรแย่ๆ ไว้ที่ปีที่แล้วและมาเริ่มใหม่ในปีนี้ สุขภาพแข็งแรง ได้ทำอะไรที่อยากทำนะ 🥰🥰",
    });
  }
};

setInterval(controlButton, 1000);
