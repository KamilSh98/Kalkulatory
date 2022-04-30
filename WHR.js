const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const hip = document.getElementById("hip").value;
    const waist = document.getElementById("waist").value;
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
        if(man.checked == true){
            const wynik = hip/waist;
            if (wynik > 1){
                result.innerHTML += wynik.toFixed(2) + " -> otyłość typu jabłko"
            }
            else
                result.innerHTML += wynik.toFixed(2) + " -> otyłość typu gruszka"
        }
        else{
            const wynik = hip/waist;
            if (wynik > 0.8){
                result.innerHTML += wynik.toFixed(2) + " -> otyłość typu jabłko"
            }
            else
                result.innerHTML += wynik.toFixed(2) + " -> otyłość typu gruszka"
        }
    } 
});
