let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const root = document.getElementById("root");

function calcAge() {
  let dateBirth = new Date(userInput.value);

  let d1 = dateBirth.getDate();
  let m1 = dateBirth.getMonth() + 1;
  let y1 = dateBirth.getYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    y3--;
    m3 = 12 + m3 - 1;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  root.textContent = `You are ${y3} ${y3 > 1 ? "years" : "year"}, ${m3} ${
    m3 > 1 ? "months" : "month"
  } and ${d3} ${d3 > 1 ? "days" : "day"} old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
