import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handSubmit);

function handSubmit(event) {
    event.preventDefault();

    const delayInput = document.querySelector('label [name="delay"]');
    const stateInput = document.querySelector('input[name="state"]');
    const delay = parseInt(delayInput.value);
    const state = getStateValue(stateInput);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise.then(
        (delay) => {
            iziToast.show({ message: `✅ Fulfilled promise in ${delay} ms`, position: "topCenter", backgroundColor: "#B5EA7C"});
        },
        (delay) => {
            iziToast.show({ message: `❌ Rejected promise in ${delay} ms`, position: "topCenter", backgroundColor: "#FFBEBE" });
        }
    );
}; 

function getStateValue(input) {
    if (input.checked) {
        return input.value;
    }
};
