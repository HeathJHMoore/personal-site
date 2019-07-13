const quotes = [
  '"Talent is a pursued interest" - Bob Ross',
  '"I\'m not superstitious, but I\'m a little-stitious." - Michael Scott',
  '"I think it is possible for ordinary people to choose to be extraordinary." - Elon Musk',
  '"I\'m on a roll like Cottonelle" - Drake'
];

let iterator = 0;

const quoteChanger = () => {
  const currentQuote = quotes[iterator];
  document.getElementById('quote').innerHTML = currentQuote;
  if (iterator === 3) {
    iterator = 0;
  } else {
    iterator += 1;
  };
};

export default { quoteChanger };
