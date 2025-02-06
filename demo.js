
let texbox=document.getElementById("textbox");
let tofar=document.getElementById("tofahrenheit");
let toce=document.getElementById("tocelsius");

let temp;
function convert(){
      if(tofar.checked){
         temp=Number(texbox.value);
         temp=temp*9/5+32;
         document.getElementById("result").textContent= temp.toFixed(1)+"°F";
      }
      else if(toce.checked){
         temp=Number(texbox.value);
         temp=(temp-32)*(5/9);
         document.getElementById("result").textContent= temp.toFixed(1)+"°C";
      }
      else{
        document.getElementById("result").textContent= "Select a Unit";
      }
}

