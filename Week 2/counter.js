let counter = 0;


const updateCounter = () => {
  counter++;
  console.log('Counter:', counter);
};
const intervalId = setInterval(updateCounter, 1000);


setTimeout(() => {
clearInterval(intervalId);
console.log('Counter stopped after 10 seconds.');
}, 10000);
