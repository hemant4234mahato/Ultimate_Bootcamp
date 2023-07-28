// let count = 0;
// function darkMode(value) {
//     let isDarkmode;

    
//     if(localStorage.getItem("mode")== null){
//         isDarkmode=value;
//     }else{
//         isDarkmode=localStorage.getItem("mode");
//         isDarkmode = !isDarkmode;
//     }
//     var element = document.body;
//     if(isDarkmode){
//         element.classList.add("dark-mode");
//         localStorage.setItem("mode",isDarkmode);
//         count ++;
//         if(count == 2){
//             localStorage.removeItem("mode");
//             count = 0;
//         }
//     }else{
//         element.classList.remove("dark-mode");
//         localStorage.setItem("mode",isDarkmode);
//         count++;
//         if(count == 2){
//             localStorage.removeItem("mode");
//             count = 0;
//         }
//     }
// }

// function dark(){
//     darkMode(!localStorage.getItem("mode"));
// }


function darkMode(value){
    let body = document.body;
    // console.log(body);
    localStorage.setItem('mode',value);
    if(value){
        body.classList.add("dark-mode");
    }else{
        body.classList.remove("dark-mode");
    }
}

function load(){
    let body = document.body;
    if(localStorage.getItem("mode") == null){
        console.log('nothing');
    }
    else if(localStorage.getItem("mode") == 'true'){
        body.classList.add("dark-mode");
        // onclick(true);
    }
    else{
        body.classList.remove("dark-mode");
        // onclick(fasle);
    }
}