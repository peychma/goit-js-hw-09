const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("input", function (event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    const { email, message } = feedbackForm.elements;
    const feedbackState = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackState));
  }
});
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, message } = feedbackForm.elements;
  if (!email.value.trim() || !message.value.trim()) {
    alert("Please fill in two fields before submitting.");
    return;
  }
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  email.value = "";
  message.value = "";
});

