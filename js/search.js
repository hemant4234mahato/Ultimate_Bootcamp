const search = document.getElementById('search');
            
            // console.log(search.value);

            function searched(){
                let i;
                var val=[];
                // console.log(search.value.length);
                fetch('http://localhost:3000/users')
                .then(response=>response.json())
                .then(data=>{
                    // const s = data.find(el=> el.[i].recipieName === search);
                    
                    // const user = data.find(el => el.[i].recipieName.slice(search.length) === search.value);
                    // console.log(user);
    
                    data.forEach((e)=>{
                
                        for(i=0;i<e.recipie.length;i++){
                            // console.log(search.value.toUpperCase());
                        if(e.recipie[i].recipieName.substr(0,search.value.length) === search.value.toUpperCase() && search.value.length){
                            val.splice(0,0,e.recipie[i].recipieName);
                            
                            // count++;
                        }
                    }
                    })
                    // console.log(val);
                    
                    // console.log(div);
                    var table = document.getElementById("table");
                    
                    // console.log(el);
                    for(i=0;i<val.length;i++){
                    let row = table.insertRow(0);
                    let cell = row.insertCell(0);
                    cell.innerHTML = `<a href='javascript:;' onclick="getRecipie('${val[i]}')">${val[i]}</a>`;
                }
                })  
            }
