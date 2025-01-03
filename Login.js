document.addEventListener('DOMContentLoaded', () => {
    const formTitle = document.getElementById('form-title');
    const formBtn = document.getElementById('form-btn');
    const toggleLink = document.getElementById('toggle-link');
    const nameField = document.getElementById('name-field');
    const authForm = document.getElementById('auth-form');
  
    let isSignUp = false;
  
    toggleLink.addEventListener('click', () => {
      isSignUp = !isSignUp;
  
      // Toggle form content based on the current state
      formTitle.textContent = isSignUp ? 'Sign Up' : 'Sign In';
      formBtn.textContent = isSignUp ? 'Sign Up' : 'Sign In';
      toggleLink.textContent = isSignUp 
        ? 'Already have an account? Sign In' 
        : "Don't have an account? Sign Up";
  
      // Show or hide the Name field
      nameField.style.display = isSignUp ? 'block' : 'none';
  
      // Reset the form
      authForm.reset();
    });
  
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Mock form submission
      const formData = new FormData(authForm);
      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        ...(isSignUp && { name: formData.get('name') }),
      };
  
      console.log(`${isSignUp ? 'Signing Up' : 'Signing In'}:`, data);
  
      // Show a success message
      alert(`${isSignUp ? 'Sign Up' : 'Sign In'} Successful!`);
    });
  });
  