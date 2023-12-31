const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("input", function (event) {
  if (event.target.tagName === 'INPUT') {
    const { email, message } = feedbackForm.elements;
    const feedbackState = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    feedbackForm.elements.email.value = parsedState.email || '';
    feedbackForm.elements.message.value = parsedState.message || '';
  }
});