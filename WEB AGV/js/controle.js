function moverDireita(){
  truck=document.getElementById("truck");

  truck.style.right="1px";

}


function moverEsquerda(){
  truck=document.getElementById("truck");

  truck.style.right="250px";

}

function normalSize(){
  home = document.querySelector(".icHome");
  stat= document.querySelector(".icStatus");
  chat= document.querySelector(".icChat");
  out= document.querySelector(".icOut");

  home.style.width = "37px";
  stat.style.width = "37px";
  chat.style.width = "37px";
  out.style.width = "37px";

  home.style.height = "37px";
  stat.style.height = "37px";
  chat.style.height = "37px";
  out.style.height = "37px";

  home.style.transition = "0.5s";
  stat.style.transition = "0.5s";
  chat.style.transition = "0.5s";
  out.style.transition = "0.5s";

}


function zoom(){

normalSize();

  icon = document.querySelector(".icHome");

  icon.style.width="45px";
  icon.style.height="45px";
 
}

function zoom2(){

  normalSize();
  
    icon2 = document.querySelector(".icStatus");
  
    icon2.style.width="45px";
    icon2.style.height="45px";
   
  }

  function zoom3(){

    normalSize();
    
      icon3 = document.querySelector(".icChat");
    
      icon3.style.width="45px";
      icon3.style.height="45px";
     
    }

    function zoom4(){

      normalSize();
      
        icon4 = document.querySelector(".icOut");
      
        icon4.style.width="45px";
        icon4.style.height="45px";
       
      }