import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      iziToast.show({
        message: "Please choose a date in the future", position: 'topCenter', backgroundColor: 'red', messageColor: 'white', messageSize: '16'
      });
        btn.disabled = true;
    } else {
        userSelectedDate = selectedDates[0] - new Date(); 
        btn.disabled = false;
    }
    },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

btn.addEventListener('click', startCountdown);

function startCountdown() {
  btn.disabled = true; 
  btn.style.background = '#CFCFCF';
  btn.style.color = '#989898'
  input.disabled = true; 
  input.style.borderColor = "#808080";
  input.style.color = "#808080"

    const timerId = setInterval(() => {
        if (userSelectedDate >= 999) {
        userSelectedDate -= 1000;
        let timeObject = convertMs(userSelectedDate);
        padStart(timeObject);
        } else {
          btn.disabled = false;
          input.disabled = false;
        };
    }, 1000); 

};

function padStart(countdown){
    days.textContent = countdown.days;
    hours.textContent = countdown.hours;
    minutes.textContent = countdown.minutes;
    seconds.textContent = countdown.seconds;
};