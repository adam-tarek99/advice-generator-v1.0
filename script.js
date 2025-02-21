const btn = document.querySelector(".btn");
const quoteTitle = document.querySelector(".title span");
const quoteContent = document.querySelector(".quote p");

const urlApi = "https://api.adviceslip.com/advice";

const getQuote = async () => {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const newQuote = await response.json();
    quoteTitle.textContent = newQuote.slip.id;
    quoteContent.textContent = JSON.stringify(newQuote.slip.advice);
  } catch (error) {
    console.error(error.message);
  }

  btn.removeAttribute("disabled");
  btn.classList.remove("loading");
  btn.style.cursor = "pointer";
  return;
};

btn.addEventListener("click", async () => {
  btn.setAttribute("disabled", "");
  btn.classList.add("loading");
  btn.style.cursor = "none";
  await getQuote();
});

{
}
