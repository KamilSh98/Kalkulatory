const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(height>100 && height<250 && weight>35 && weight<250){
    const wynik = (weight/(height*height))*10000;
    document.getElementById("result").innerHTML += wynik.toFixed(2);
}
else{
    alert("Proszę podać prawidłowe parametry ciała");
}
});