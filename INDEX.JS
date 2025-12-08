/* let broj1 = prompt("Unesi prvi broj:");
let broj2 = prompt("Unesi drugi broj:");
if (broj1 > broj2) {
    alert(broj1 + " je veći od " + broj2);
}
else if(broj1 < broj2) {
    alert(broj2 + " je veći od " + broj1);
}
else
{
    alert("Brojevi su jednaki");
} */

   
let masa = prompt("Unesi svoju masu:");
let visina = prompt("Unesi svoju visinu:");
let bmi = Math.round(masa/(visina*visina));
alert("Vaš BMI indeks iznosi: " + bmi);