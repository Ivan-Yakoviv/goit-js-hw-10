import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as c,i as d}from"./assets/vendor-77e16229.js";const n=document.querySelector("input"),e=document.querySelector("button"),i=document.querySelector("span[data-days]"),l=document.querySelector("span[data-hours]"),m=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]");let o;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(d.show({message:"Please choose a date in the future",position:"topCenter",backgroundColor:"red",messageColor:"white",messageSize:"16"}),e.disabled=!0):(o=t[0]-new Date,e.disabled=!1)}};c(n,y);function f(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),r=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:r,seconds:u}}e.addEventListener("click",p);function p(){e.disabled=!0,e.style.background="#CFCFCF",e.style.color="#989898",n.disabled=!0,setInterval(()=>{if(o>=999){e.disabled=!0,o-=1e3;let t=f(o);b(t)}else e.disabled=!1},1e3)}function b(t){i.textContent=t.days,l.textContent=t.hours,m.textContent=t.minutes,h.textContent=t.seconds}
//# sourceMappingURL=commonHelpers.js.map
