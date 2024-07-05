document.querySelector("#submit").addEventListener("click",function(){
    console.log("hi");
    const operation = document.getElementById("cal");
    const valOpe = operation.value;
    
    let n= document.getElementById("num1").value;
    if(valOpe=="natural"){
        console.log("Hello!"); // a simple grammatical correction
        let sum1=0;
        for(let i=1;i<=n;i++){
            sum1+=i;
        }
        document.getElementById("resultCalculator").textContent="Sum of first "+ +n+" natural numbers is "+ +sum1; //ensuring convertion to integers with +
    }
    else if(valOpe=="odd"){
        let sum2=0;
        for(let i=1;i<(2*n+1);i++){
            if(i%2!=0){
            sum2+=i;}
        }
    
        document.getElementById("resultCalculator").textContent="Sum of first "+ +n+" odd natural numbers is "+ +sum2; //same as previous
    }else if(valOpe=="even"){
        let sum3=0;
        for(let i=1;i<(2*n+1);i++){
            if(i%2==0){
            sum3+=i;}
        }
        document.getElementById("resultCalculator").textContent="Sum of first "+ +n+" even natural numbers is "+ +sum3; //textContent extract only text while innerHTML extracts the hole html elements inside the parent
    }
    else if(valOpe=="cube"){
        let sum4=0;
        for(let i=1;i<=n;i++){
            sum4+=i*i*i;
        }
        document.getElementById("resultCalculator").innerHTML="Sum of cube of first "+ +n+" natural numbers is "+ +sum4;
    }
    else if(valOpe=="square"){
        let sum5=0;
        for(let i=1;i<=n;i++){
            sum5+=i*i;
        }
        document.getElementById("resultCalculator").innerHTML="Sum of square of first "+ +n+" natural numbers is "+ +sum5;
    }

})
