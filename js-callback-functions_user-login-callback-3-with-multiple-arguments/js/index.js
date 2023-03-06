console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`welcome ${userName} you are loggin in as ${userRole}!`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName, userRole) => {
  console.log(
    `hey ${userName} ! you made it! youre logged as ${userRole} right now.`
  );
});
