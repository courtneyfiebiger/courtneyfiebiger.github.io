document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let a = document.getElementById("a").valueAsNumber;
    let b = document.getElementById("b").valueAsNumber;
    let c = document.getElementById("c").valueAsNumber;

    let max;
    if (a>= b && a >= c) {
         max= a;
    } else if (b>=a&&b>=c) {
        max = b;
    } else {
        max=c
    }
    document.getElementById("max").innerHTML = "The max is: "+ max;
}
