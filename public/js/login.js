
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/profile`);
      } else {
        // console.log(err);
        alert('Failed to log in.');
      }
    }
  };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   // const name = document.querySelector('#create-name').value.trim();
//   const email = document.querySelector('#create-email').value.trim();
//   const password = document.querySelector('#create-password').value.trim();
//   const is_employer = document.querySelector('#employerCheck:checked') ? true : false;
 

//   if(email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ email, password, is_employer }),
//       headers: {'Content-Type': 'application/json'},
//     });

//     if (response.ok) {
//       document.location.replace('/editProfile');
//     } else {
//       alert('failed to sign up');
//     }
//   }
// };

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  // document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);