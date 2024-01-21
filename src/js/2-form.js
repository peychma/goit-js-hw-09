const feedbackForm = document.querySelector(".feedback-form");
document.addEventListener("DOMContentLoaded", function () {
  const storedData = localStorage.getItem("feedback-form-state");
  if (storedData) {
    const { email, message } = feedbackForm.elements;
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
});
feedbackForm.addEventListener("input", function (event) {
  const { email, message } = feedbackForm.elements;
  const feedbackState = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackState));
});
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, message } = feedbackForm.elements;
  const trimmedEmail = email.value.trim();
  const trimmedMessage = message.value.trim();
  if (!trimmedEmail || !trimmedMessage) {
    alert("Please fill in two fields before submitting.");
    return;
  }
  const formData = {
    email: trimmedEmail,
    message: trimmedMessage,
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  email.value = "";
  message.value = "";
})
