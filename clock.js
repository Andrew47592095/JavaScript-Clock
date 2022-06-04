function updateClock() {
  let current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();
  let day = current.getDay();
  let date = current.getDate();
  let year = current.getFullYear();
  let month = current.getMonth();

  //day 👉 0 ~ 6. 0 = Sunday, 6 = Saturday
  //month 👉 0 ~ 11. 0 = January, 11 = December

  let time = document.getElementById("time");
  let dateTime = document.getElementById("date-time");

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  minutes = minutes < 10 ? '0' + minutes: minutes;
  //👆if(minutes < 10) {'0' + minutes}
  //else {minute}
  seconds = seconds < 10 ? '0' + seconds: seconds;
  date = date < 10 ? '0' + date : date;

  time.textContent = hours + ':' + minutes + ':' + seconds;
  dateTime.textContent = monthNames[month] + '/' + date + '/' + year
}

setInterval(updateClock,1000);
