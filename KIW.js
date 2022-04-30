const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const woman = document.getElementById("woman");
    const man = document.getElementById("man");

    if (woman.checked == true && man.checked == true)
    {
        alert("Nie można wybrać obu płci");
    } 
    else if(woman.checked == false && man.checked == false)
    {
        alert("Proszę wybrać płeć");
    }
    else
    {
        const type = document.getElementById("type");
        var typevalue = type.value;
        if(man.checked == true){
            if(typevalue == 1){
                var wynik = height - 100 - ((height - 150)/4);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 2){
                var wynik = (height - 100) * 0.9;
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 3){
                var wynik = height - 100 - (height-100)/20;
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 4){
                var wynik = 48 + 1.1*(height-152);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else{
                var wynik = 50 + 0.9*(height-152);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
        }
        else{
            if(typevalue == 1){
                var wynik = height - 100 - ((height - 150)/2);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 2){
                var wynik = (height - 100) * 0.85;
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 3){
                var wynik = height - 100 - (height-100)/10;
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else if(typevalue == 4){
                var wynik = 45.4 + 0.9*(height-152);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
            else{
                var wynik = 45.5 + 0.9*(height-152);
                result.innerHTML += wynik.toFixed(0) +"kg";
            }
        }
    } 
});
