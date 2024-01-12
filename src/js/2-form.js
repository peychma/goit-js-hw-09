const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("input", function (event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const { email, message } = feedbackForm.elements;
    const feedbackState = { email: email.value.trim(), message: message.value.trim() };
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
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const { email, message } = feedbackForm.elements;
  const formData = { email: email.value.trim(), message: message.value.trim() };
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
