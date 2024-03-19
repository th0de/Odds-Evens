
//State
const state = {
  numbers: [],
  odds: [],
  events [],
}

//Reference Bank

const startingBank = document.querySelector("#startingBank ul");
const targetBank = document.querySelector("#targetBank ul");
const form = document.querySelector("form");



//Event Listeners/////////////////////////////////

startingBank.addEventListener('click', (event) => {
  console.log(event)
})
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const numToAdd = document.querySelector('input').value * 1;
  if (typeof numToAdd !== 'number') return;
  state.numbers.push(numToAdd);
  document.querySelector('input').value = '';
  render();
})

document.querySelector('#sortOne').addEventListener('click', (event) => {
  event.preventDefault();
  if (state.numbers.length === 0) return;
  const numToSort = state.numbers.shift();
  if (numToSort % 2 === 0) state.evens.push(numToSort);
  else state.odds.push(numToSort);
  render();
})

document.querySelector('#sortAll').addEventListener('click', (event) => {
  event.preventDefault();
  if (state.numbers.length === 0) return;
  for (let i=0; i<state.numbers.length; i++) {
    if (state.numbers[i] % 2 === 0) state.evens.push(state.numbers[i]);
    else state.odds.push(state.numbers[i]);
  }
  state.numbers = [];
  render();
})


//////////////////////////////////////////////////
const mapRender = (currentNumber) => {
  const p = document.createElement('p');
  p.innerText = currentNumber;
  return p;
}

const render = () => {
  const numbersInBank = state.numbers.map(mapRender);
  const oddsInBank = state.odds.map(mapRender);
  const evensInBank = state.evens.map(mapRender);

  numberBank.replaceChildren(...numbersInBank);
  oddBank.replaceChildren(...oddsInBank);
  evenBank.replaceChildren(...evensInBank);
}