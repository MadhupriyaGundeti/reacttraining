function numberClick()
{
    var a=document.getElementById("numberId").value;
    checkNumber(a);
}

function checkNumber(n){
    var i = n;
    if(i>0){
        console.log("Number is positive")
    }
    else if(i==0){
        console.log("Number is zero")
    }
    else{
        console.log("Number is negative")
    }
}