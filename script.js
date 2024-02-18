const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById('product-list');


    produkty.forEach(product => {
        const rada = document.createElement('tr');
        rada.innerHTML = `
            <td>${product.nazev}</td>
            <td>${product.cenaZaKus}</td>
            <td>${product.pocetNaSklade}</td>
        `;
        productList.appendChild(rada);
    });
});



function pridatProdukt() {
    const nazev = document.querySelector('.nazev').value;
    const cenaKus = parseFloat(document.querySelector('.cenaKus').value);
    const pocet = parseInt(document.querySelector('.pocet').value);

    // vytvoří novej řadek a prida produktos do arraye 
    if (nazev && !isNaN(cenaKus) && !isNaN(pocet)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nazev}</td>
            <td>${cenaKus}</td>
            <td>${pocet}</td>
        `;
        document.getElementById('product-list').appendChild(newRow);

        document.querySelector('.nazev').value = '';
        document.querySelector('.cenaKus').value = '';
        document.querySelector('.pocet').value = '';
        //odděla form 
        document.getElementById("pridatForm").style.display = "none";
    } else {
        alert('Please fill in all fields with valid values.');
    }
}

function hledatProdukt() {
    const hledanyProdukt = document.querySelector('#Hledat input[type="text"]').value.toLowerCase();
    const productList = document.getElementById('product-list');
    const rows = productList.querySelectorAll('tr');
    let found = false;

    rows.forEach(row => {
        const nazevProduktu = row.cells[0].textContent.toLowerCase();
        if (nazevProduktu.includes(hledanyProdukt)) {
            row.style.display = 'table-row';
            found = true;
        } else {
            row.style.display = 'none';
        }
    });

    if (!found) {
        alert('Produkt nebyl nalezen.');
    }
}

function najitNejdrazsiProdukt() {
  
    let nejdrazsiProdukt = produkty[0];

 
    for (let i = 1; i < produkty.length; i++) {
        if (produkty[i].cenaZaKus > nejdrazsiProdukt.cenaZaKus) {
            nejdrazsiProdukt = produkty[i];
        }
    }


    document.getElementById('nejdrazsiProdukt').textContent = nejdrazsiProdukt.nazev + ' (' + nejdrazsiProdukt.cenaZaKus + ')';
}

function zrusNejdrazsi() {
    document.getElementById("Nejdrazsi").style.display = "none";
}

function pridatForm(){
    document.getElementById("pridatForm").style.display="block";
}
function zrus(){
    document.getElementById("pridatForm").style.display="none";
}
function zacitHledat() {
    document.getElementById("Hledat").style.display = "block";

}
function zrusHledat(){
    document.getElementById("Hledat").style.display="none";
}
function nejdrazsi(){
    document.getElementById("Nejdrazsi").style.display="block";
}
function zrusNejdrazsi(){
    document.getElementById("Nejdrazsi").style.display="none";
}