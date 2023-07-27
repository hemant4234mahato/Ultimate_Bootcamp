
function darkMode(value) {
    let isDarkmode;
    let count = 0;
    if(localStorage.getItem("mode")== null || count == 2){
        isDarkmode=value;
        if(count == 2){
            localStorage.setItem("mode",null);
        }
    }else{
        isDarkmode=localStorage.getItem("mode");
        isDarkmode = !isDarkmode;
    }
    var element = document.body;
    if(isDarkmode){
        element.classList.add("dark-mode");
        localStorage.setItem("mode",isDarkmode);
        count ++;
    }else{
        element.classList.remove("dark-mode");
        localStorage.setItem("mode",isDarkmode);
        count++;
    }
}