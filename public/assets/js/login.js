async function loginFormHandler(event) {
    event.preventDefault();
  
    const user = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (user && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          user,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);



async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();


    const password = document.querySelector('#password-signup').value.trim();

    // if we have username and password values
    // then we create a POST request for users endpoint
    // we create a new USER
    if (username && password) {
        // we assign await function to a variable, so we do not have to chain .then methods to fetch
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        };
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);