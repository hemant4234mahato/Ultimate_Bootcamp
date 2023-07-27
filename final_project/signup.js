const signupForm=document.getElementById('signup');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const username=document.getElementById('username1').value;
    const email=document.getElementById('email1').value;
    const password=document.getElementById('password1').value;
    const formData={
        username:username,
        email:email,
        password:password
    }
    
    fetch(" http://localhost:3000/admin",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Sign Up Successful',data);
        function signin() {
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0px";
        }        

    })
    .catch(error=>{
        console.log("error",error);
    })
    
})