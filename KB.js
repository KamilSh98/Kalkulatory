const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const distance = document.getElementById("distance").value;
    if(weight>35 && weight<250 && distance>0 && distance<200){
    const wynik = weight*(1.035*distance)
    result.innerHTML += wynik.toFixed(0);
}
else if(weight<35 && weight>250){
    alert("Proszę podać prawidłowe parametry ciała");
}
else{
    alert("Proszę podać prawidłowy dystans");
}
});