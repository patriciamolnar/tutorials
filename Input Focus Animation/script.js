document.addEventListener('DOMContentLoaded', () => {

  const applyBorder = e => {
      const inputContainer = e.target.parentElement; 
      inputContainer.classList.toggle('outline');
  }

  const inputs = document.querySelectorAll('input'); 
  inputs.forEach(input => {
      input.addEventListener('focus', e => applyBorder(e)); 
      input.addEventListener('blur', e => applyBorder(e)); 
  });

}, false);
