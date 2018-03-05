//linker sammen html og js slik at de får tak i verdiene man skriver inn i feltene, og skal reagere når man clicker.
function setup() {
    let inpkmh = document.getElementById("kmh");
    let inpms = document.getElementById("ms");

    let btnkmh2ms = document.getElementById("kmh2ms");
    btnkmh2ms.addEventListener("click", kmh2ms);

    let btnms2kmh = document.getElementById("ms2kmh");
    btnms2kmh.addEventListener("click", ms2kmh);
//her regnes kmh om til ms ved å dividere med 3.6
    function kmh2ms(event) {
        let kmh = inpkmh.valueAsNumber;
        let ms = kmh / 3.6;
        inpms.value = ms.toFixed(1);

    }
// her regnes ms om til kmh ved å multiplisere med 3.6, bruker toFixed for å få 1 desimal
    function ms2kmh(event) {
        let ms = inpms.valueAsNumber;
        let kmh = ms * 3.6;
        inpkmh = kmh.toFixed(1);
    }
}
