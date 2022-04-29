const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const repeat = document.getElementById("repeat");
    var repeatvalue = repeat.value;

    if (weight > 0 && weight < 300){
        if(repeatvalue == 1){
            var wynik = repeatvalue * weight;
            result.innerHTML += wynik.toFixed(2);
        }
        else if(repeatvalue == 2){
            var wynik = weight + (weight*0.0275);
            alert(wynik);
        }
        else if(repeatvalue == 3){
            var wynik = weight+(weight*0.06);
            alert(wynik);
        }
        else if(repeatvalue == 4){
            var wynik = weight+(weight*0.09);
            alert(wynik);
        }
        else if(repeatvalue == 5){
            var wynik = weight+(weight*0.125);
            alert(wynik);
        }
        else if(repeatvalue == 6){
            var wynik = weight+(weight*0.1625);
            alert(wynik);
        }
        else if(repeatvalue == 7){
            var wynik = weight+(weight*0.2);
            alert(wynik);
        }
        else if(repeatvalue == 8){
            var wynik = weight+(weight*0.2425);
            alert(wynik);
        }
        else if(repeatvalue == 9){
            var wynik = weight+(weight*0.285);
            alert(wynik);
        }
        else {
            var wynik = weight+(weight*0.3325);
            alert(wynik);
        }
    }
    else{
        alert("Proszę podać prawidłowe wartości");
    }
});