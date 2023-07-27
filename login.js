const username = document.getElementById('username');
const password = document.getElementById('password');
function login() {
    fetch("http://localhost:3000/users", {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const user = data.find((element) => element.username === username.value && element.password === password.value);
            console.log("User:", user);
            if (user) {
                const token = Date.now();
                localStorage.setItem('token', token);
                alert("Logged in Successfully");
                window.location.href = 'home.html';
            }
            else {
                alert("You are not a member please sign in");
                window.location.href = 'signup.html';
            }
        })
}