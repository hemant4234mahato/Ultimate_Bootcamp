const Display = document.getElementById('cont');
            const phrasess = ['Cooking gone wrong? ','Festive Time?','Crave for Sweets?','Good food Good mood!!!ジ'];
            let k=0;
            let l = 0;
            let isDeletings = false;
            let currentPhrases =[];
            let counts = 0;
    
           function tyepWritercont(){
    isEnd = false;
    if((currentPhrases.slice(-1) == '.' || currentPhrases.slice(-1) ==",") && counts<2){
    if(counts==1){
        currentPhrases.pop();
    }
    counts++;
}else{
    if(counts == 2){
        counts = 0;
    
    Display.innerHTML=currentPhrases.join('');
    }else{
        counts=0;
        Display.innerHTML=currentPhrases.join('');
    }
} 
    

    if(k<phrasess.length){
        // console.log(phrasess[k]);
        if(!isDeletings && l <= phrasess[k].length){
            // console.log(phrasess[k][l]);
            currentPhrases.push(phrasess[k][l]);
            l++;
        }

        if(isDeletings && l<= phrasess[k].length){
            currentPhrases.pop(phrasess[k][l]);
            l--;
        }

        if(l == phrasess[k].length){
            isEnd = true;
            isDeletings = true;
        }

        if(isDeletings && l==0){
            currentPhrases=[];
            isDeletings = false
            k++;
        }

        if(k==phrasess.length){
            k=0;
        }
    }
    const speedUp = Math.random()*(180-90)+90;
    const normalSpeed = Math.random()*(500-300)+300;
    const time = isEnd ? 2000 : isDeletings ? speedUp : normalSpeed;
    setTimeout(tyepWritercont,90);
}

