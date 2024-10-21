document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let P = document.getElementById("P").valueAsNumber;
    let n = document.getElementById("n").valueAsNumber *12;
    let r = document.getElementById("r").valueAsNumber /100;
    A = P*(r*(1+r)**n)/(((1+r)**n)-1);
    let total_pay = A * n;
    let total_interest = total_pay - P;
    document.getElementById("result").innerHTML = "The monthly payement is $"+ A.toFixed(2) + ".<br>The total payment is $"+ total_pay.toFixed(2) + ".<br>The total interest is $" + total_interest.toFixed(2) + ".";
}
