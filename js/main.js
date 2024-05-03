'use strict'
let buttondati = document.getElementById('buttondati');

buttondati.addEventListener('click', function () {


    let chilometri = document.getElementById('kmp');

    let eta = document.getElementById('eta');

    const prezzokm = Number(0.21);

    let prezzo = (chilometri.value * prezzokm);

    if (eta.value === 'min') {

        let percentuale20 = Number(prezzo / 100 * 80);

        let prezzo20 = (percentuale20)
        console.log(prezzo20);
    }
    else if (eta.value === 'over65') {

        let percentuale40 = Number(prezzo / 100 * 60)

        let prezzo40 = (percentuale40)
        console.log(prezzo40);
    }
    else {

        console.log(prezzo)
    }


}
);






document.getElementById("inserimentodati").onclick = function (e) {

    e.preventDefault()
};
