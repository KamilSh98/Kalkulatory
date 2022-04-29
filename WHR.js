const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const hip = document.getElementById("hip").value;
    const waist = document.getElementById("waist").value;
    const woman = document.getElementById("woman").checked;
    const man = document.getElementById("man").checked;

    if(woman = checked && man.checked == false){
        const wynik = waist/hip;
        result.innerHTML += wynik.toFixed(2);
    }
    else if (woman.checked = false && man.checked == true)
    {
        const wynik = waist/hip;
        result.innerHTML += wynik.toFixed(2);
    } 
    else if (woman.checked = true && man.checked == true)
    {
        alert("Nie można wybrać obu płci");
    } 
    else (woman.checked = false && man.checked == false)
    {
        alert("Proszę wybrać płeć");
    }



});