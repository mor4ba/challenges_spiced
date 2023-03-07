console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

function showWelcomeMessage(text) {
  console.log("Welcome ! youre logged in now!");
}

handleUserLogin(showWelcomeMessage);
handleUserLogin(() => {
  showWelcomeMessage();
});
