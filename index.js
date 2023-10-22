const diceButton = document.querySelector("button");
const adviceQuote = document.querySelector("p");
const adviceTitleCard = document.querySelector("span");

//API integration
const adviceAPI = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    const response = await fetch(adviceAPI);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

getAdvice().then((res) => (adviceTitleCard.innerHTML = res.slip.id));
getAdvice().then((res) => (adviceQuote.innerHTML = `"${res.slip.advice}"`));

diceButton.addEventListener("click", () => {
  getAdvice().then((res) => (adviceTitleCard.innerHTML = res.slip.id));
  getAdvice().then((res) => (adviceQuote.innerHTML = `"${res.slip.advice}"`));
});
