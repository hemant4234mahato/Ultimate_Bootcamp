const username = document.getElementById('username');
const password = document.getElementById('password');

function login(){
    fetch("http://localhost:3000/users")
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        const user = data.find(el => el.username===username.value && el.password===password.value)
        console.log(user);

        if(user){
            const token = Date.now();
            localStorage.setItem('token',token);
            alert("Logged In Successfully");
            window.location.href='home.html';
        }
        else{
            window.location.href='signup.html';
        }
    })
}
