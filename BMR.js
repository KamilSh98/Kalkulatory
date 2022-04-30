const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const woman = document.getElementById("woman");
    const man = document.getElementById("man");
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;

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
        if(man.checked == true){
            const wynik = 66.47 + 13.75*weight + 5*height - 6.75*age
            result.innerHTML += wynik.toFixed(2);
        }
        else{
            const wynik = 665.09 + 9.56*weight + 1.85*height - 4.67*age
            result.innerHTML += wynik.toFixed(2);
        }
    } 
    });
