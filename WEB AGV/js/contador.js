var sec = 0
var min = 0
/* o contador para no 15*/


function start(){
    interval = setInterval(watch, 1000)
    var element = document.getElementById("modalPeca");
    element.classList.add("show-modalPeca");
  
}

function stop(){
    
}

function watch(){
    sec++
    if(sec == 90){
        min++
        sec=0
    }
    if(sec > 15){
        
        sec = 0
        min = 0
    
        for(document.getElementById('watch').innerText=sec = 0; sec > 15; document.getElementById('watch').innerText=sec++){
                
        }
    }
    document.getElementById('watch').innerText=sec
}