var stockVoitures = {
    "Porsche 911 (992)" : 5,
    "Mercedes-AMG GT Black" : 10,
    "Ferrari F8 Tributo" : 4,
    "Audi R8" : 6,
    "Lamborghini SVJ" : 7
}

function afficherSctock() {
    var tableauVoitures = document.getElementById('tableauVoiture');
    var lignes = tableauVoitures.getElementsByTagName('tr');

    for (var i = 1; i < lignes.length(); i++){
        var modele = lignes[i].querySelector('.Modeles').textContent;
        var celluleStock = ligne.querySelector('.Stock');
        
        if (stockVoitures.hasOwnProperty(modele)){
            celluleStock.textContent = stockVoitures[modele];
        }
    
    }

}