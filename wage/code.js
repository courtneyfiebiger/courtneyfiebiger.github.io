document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let t = document.getElementById("normal_hours").valueAsNumber;
    let r = document.getElementById("normal_payrate").valueAsNumber;
    let o = document.getElementById("overtime_payrate").valueAsNumber;
    let total = document.getElementById("total_hours").valueAsNumber;
    let earned;
    if (total<=t) {
         earned= total*(r);
    } else {
        let normal_earned = t*r;
        let overtime_earned = (total-t)*o;
        earned = normal_earned + overtime_earned;
    }
    document.getElementById("wage").innerHTML = "Your wage is: $"+ earned.toFixed(2);
}
