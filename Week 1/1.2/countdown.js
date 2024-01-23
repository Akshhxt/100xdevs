const countdown = () => {
    console.log(`Countdown: ${count}`);
    if (count-- === 0) {
      console.log("Time's up!");
    } else {
      setTimeout(countdown, 1000);
    }
  };
  