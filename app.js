// init github class
const github = new GitHub();
// init UI class
const ui = new UI();

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keydown", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // alert user can't found
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Display the user
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear the profile
    ui.clearProfile();
  }
});
