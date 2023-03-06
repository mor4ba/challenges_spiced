console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(text) {
  console.log(`welcome ${text} You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);
handleUserLogin((text) => {
  console.log(`welcome ${text}! Youre welcome =)`);
});
