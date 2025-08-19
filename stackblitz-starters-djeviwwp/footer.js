document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("subscribeEmail");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for subscribing.");
    form.reset(); // Clears the form
  });
});

function sendCustomAlert(content){
  alert(content);
}