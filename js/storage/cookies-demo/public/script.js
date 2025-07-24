const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    // console.log(username, password);
    try{
      const response = await fetch('/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          username,
          password
        })
      })
      const data = await response.json();
      console.log(data);
    }catch(err){
      console.log('登录错误')
    }
})