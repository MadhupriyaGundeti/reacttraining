function ageClick()
{
    var a = document.getElementById("ageId").value;
    calculateTicketPrice(a);
} 

function calculateTicketPrice(num)
{
    let i = num;
    if(i>0 && i<=6){
        console.log("free")
    }
    else if(i>5 && i<13){
        console.log("$10")
    }
    else if(i>12 && i<60){
        console.log("$20")
    }
    else {
        console.log("$15")
    }


}