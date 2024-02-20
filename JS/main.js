// import fetchWrapper from "./fetch-wrapper.js";

// API URL  	https://api.adviceslip.com/advice

const advice_id = document.querySelector("#advice_Id");
const advice_text = document.querySelector("#advice_Text");
const dice = document.querySelector("#roll-the-dice");

const getAdvice = () => {
    // const API = new fetchWrapper("https://api.adviceslip.com");
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            advice_id.textContent = `Advice #${data.slip.id}`;
            advice_text.textContent = `"${data.slip.advice}"`;
            // console.log(data);
        });
};

dice.addEventListener("click", () => {
    getAdvice();
});
