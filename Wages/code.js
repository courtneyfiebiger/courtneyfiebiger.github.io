document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let t = document.getElementById("normal_hours").valueAsNumber;
    let r = document.getElementById("normal_payrate").valueAsNumber;
    let o = document.getElementById("overtime_payrate").valueAsNumber;
    let total = document.getElementById("total_hours").valueAsNumber;
    Wage = (t*r)+(o*(total-t));
    document.getElementById("wage").innerHTML = "Your wage is: $"+ Wage.toFixed(2);
}
