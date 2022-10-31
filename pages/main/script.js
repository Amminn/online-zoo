const emailInput = document.getElementById('emailInput')
const submitButton = document.getElementById('submitButton')

emailInput.addEventListener('input', () => {
  if (emailInput.value.length > 0) {
    console.log('clean')
    submitButton.classList.remove("mistake")
    submitButton.disabled = false;
  } else if (emailInput.value.length == 0) {
    submitButton.classList.add("mistake")
    submitButton.disabled = true;
  }
})