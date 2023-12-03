document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Perform validation or submit the form data to a server
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // You can add AJAX requests or other logic here for form submission
    });
  });
  