document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact_form');
  const clearBtn = document.getElementById('clearbtn');

  function loadFormData() {
    const nameKey = form.name.value.trim();
    if (!nameKey) return;

    const savedData = localStorage.getItem(nameKey);
    if (savedData) {
      const data = JSON.parse(savedData);
      form.name.value = data.name || '';
      form.email.value = data.email || '';
      form.phone.value = data.phone || '';
      form.info.value = data.info || '';
      form.invoice.checked = data.invoice || false;
    }
  }

  function saveFormData() {
    const nameKey = form.name.value.trim();
    if (!nameKey) return;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      info: form.info.value,
      invoice: form.invoice.checked
    };

    localStorage.setItem(nameKey, JSON.stringify(formData));
  }

  // Only save when the name field loses focus
  form.name.addEventListener('blur', saveFormData);

  // Load data when name field loses focus too
  form.name.addEventListener('blur', loadFormData);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nameKey = form.name.value.trim();
    const phoneValue = form.phone.value.trim();
  
    if (!nameKey) {
      alert('Please enter your name to save the form.');
      return;
    }
  
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (phoneValue && !phoneRegex.test(phoneValue)) {
      alert('Please enter a valid U.S. phone number (e.g., 123-456-7890).');
      return;
    }
  
    saveFormData();
  
    alert(`Thank you for your message, "${nameKey}". We will contact you at our earliest convenience.`);
  
    form.reset();
  });

  clearBtn.addEventListener('click', () => {
    const nameKey = form.name.value.trim();
    if (nameKey) {
      localStorage.removeItem(nameKey);
    }
    form.reset();
  });

  loadFormData();
});