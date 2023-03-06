console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`welcome ${userName}! youre logged in as ${userRole} right now!`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");
