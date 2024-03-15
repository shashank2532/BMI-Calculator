const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

   const height= parseInt(document.querySelector("#height").value);

   const weight =parseInt(document.querySelector("#weight").value);

   const results=document.querySelector("#results");

  if((height==='' || height<0 || isNaN(height))&&(weight==='' || weight<0 || isNaN(weight))){

    results.innerHTML="please give a valid height and weight";
  }
  
  else if(height==='' || height<0 || isNaN(height)){
          results.innerHTML="please give a valid height";
   }

  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="please give a valid weight";
   }
   else{

    const bmi=   (weight/((height*height)/10000)).toFixed(2);

    let res="";

    if(bmi<18.6){
         res="You are under weight";
    }
    else if(bmi>18.6 && bmi<24.9){
        res="You have a normal weight";
    }
    else{
        res="You are over weight";
    }

    results.innerHTML=`<span>Results:</span><br><span>You BMI is ${bmi}</span><br><span>${res}</span>`;

    results.removeAttribute("hidden");
   }

});