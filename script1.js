function validateAndSubmitForm() {
    var form = document.getElementById('contactForm');
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Get the form values
    var email = document.getElementById('exampleFormControlInput1').value;
    var message = document.getElementById('exampleFormControlTextarea1').value;

    // You can perform additional actions here, such as sending the form data to a server

    // Clear the form fields
    form.reset();

    // Show the popup
    document.getElementById('exampleModal').classList.add('show');
  }

  function closePopup() {
    document.getElementById('exampleModal').classList.remove('show');
}