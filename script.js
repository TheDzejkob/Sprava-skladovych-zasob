document.addEventListener("DOMContentLoaded", function() {
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

function pridatForm(){
    document.getElementById("pridatForm").style.display="block";
}
function zrus(){
    document.getElementById("pridatForm").style.display="none";
}
function zacitHledat(){
    document.getElementById("Hledat").style.display="block";
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