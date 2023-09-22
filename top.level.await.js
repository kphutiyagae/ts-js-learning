// Should wait for 4 seconds then console.log the value 20
function awaitingFunction(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 4000);
  });
}

async function topLevelAwaitFunction() {
  const returnedValue = await awaitingFunction(20);
  console.log(returnedValue);
}

topLevelAwaitFunction();
