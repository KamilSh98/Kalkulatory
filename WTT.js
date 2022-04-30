const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
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
            var a = 4.15*waist;
            var b = a/2.54;
            var c = 0.082*weight;
            var d = b - c - 98.42;
            var e = weight*2.2;
            const wynik = d/e*100;
            result.innerHTML += wynik.toFixed(2)+"%";
        }
        else{
            var a = 4.15*waist;
            var b = a/2.54;
            var c = 0.082*weight;
            var d = b - c - 76.76;
            var e = weight*2.2;
            const wynik = d/e*100;
            result.innerHTML += wynik.toFixed(2) +"%"; 
        }
    } 
});
