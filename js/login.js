const radioredirect = () => {
  const user = document.getElementsByName("type_of_user");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    if (user[0].checked) {
      window.location = "http://127.0.0.1:5502/html/employee/profile.html";
    } else {
      window.location = "http://127.0.0.1:5501/html/login.html";
    }
  });
};

radioredirect();
