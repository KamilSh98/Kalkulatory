const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const weightString = document.getElementById("weight").value;
    const repeat = document.getElementById("repeat");
    var repeatvalue = repeat.value;
    weight = Number(weightString);

    if (weight > 0 && weight < 300){
        if(repeatvalue == 1){
            var wynik = repeatvalue * weight;
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 2){
            var wynik = weight + (weight*0.0275);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 3){
            var wynik = weight+(weight*0.06);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 4){
            var wynik = weight+(weight*0.09);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 5){
            var wynik = weight+(weight*0.125);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 6){
            var wynik = weight+(weight*0.1625);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 7){
            var wynik = weight+(weight*0.2);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 8){
            var wynik = weight+(weight*0.2425);
            result.innerHTML += wynik.toFixed(0);
        }
        else if(repeatvalue == 9){
            var wynik = weight+(weight*0.285);
            result.innerHTML += wynik.toFixed(0);
        }
        else {
            var wynik = weight+(weight*0.3325);
            result.innerHTML += wynik.toFixed(0);
        }
    }
    else{
        alert("Proszę podać prawidłowe wartości");
    }
});