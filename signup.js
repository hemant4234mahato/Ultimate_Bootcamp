const signupForm = document.getElementById('signupform');
// console.log(signupForm);
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //Create an Object to hold the DAta to send
    const formData={
            username:username,
            email:email,
            password:password
    }

    //Send the Post Process
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then((data)=>{
        console.log("Sign up Successfully",data);
        window.location.href='signin.html';
    })

    .catch(error=>{
        console.log(error)
    })
})