const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const repeat = document.getElementById("repeat").value;

    if(repeat = 1){
        const wynik = repeat * weight;
        result.innerHTML += wynik.toFixed(2);
    }   
    else if(repeat = 2){
        const wynik = weight+(weight*0.0275);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 3){
        const wynik = weight+(weight*0.06);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 4){
        const wynik = weight+(weight*0.09)  ;
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 5){
        const wynik = weight+(weight*0.125);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 6){
        const wynik = weight+(weight*0.1625);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 7){
        const wynik = weight+(weight*0.2);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 8){
        const wynik = weight+(weight*0.2425);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 9){
        const wynik = weight+(weight*0.285);
        result.innerHTML += wynik.toFixed(2);
    }
    else if(repeat = 10){
        const wynik = weight+(weight*0.3325);
        result.innerHTML += wynik.toFixed(2);
    }
    else{
        alert("Proszę podać prawidłowe wartości");
    }
});