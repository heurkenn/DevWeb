var stockVoitures = {
    "Porsche 911 (992)" : 9,
    "Mercedes-AMG GT Black" : 10,
    "Ferrari F8 Tributo" : 4,
    "Audi R8" : 6,
    "Lamborghini SVJ" : 7
}

function afficherStock() {
    // Votre fonction pour afficher le stock ici
    var stockColumns = document.querySelectorAll('.stockHeader, .Stock');
    stockColumns.forEach(function(column) {
        column.style.display = 'none';
    });
}

function toggleStock() {
    var stockColumns = document.querySelectorAll('.stockHeader, .Stock');
    stockColumns.forEach(function(column) {
        if (column.style.display === 'none') {
            column.style.display = 'table-cell';
        } else {
            column.style.display = 'none';
        }
    });
}

function ajouterQuantite(button) {
    var row = button.parentNode.parentNode;
    var quantiteSpan = row.querySelector('.quantite-commandee');
    var stock = parseInt(row.querySelector('.Stock').textContent);
    var quantiteCommandee = parseInt(quantiteSpan.textContent);
    
    if (quantiteCommandee < stock) {
        quantiteSpan.textContent = quantiteCommandee + 1;
    }

    // Désactiver le bouton "+" si la quantité commandée atteint le stock
    if (quantiteCommandee + 1 >= stock) {
        button.disabled = true;
    }

    // Réactiver le bouton "-" si la quantité commandée est supérieure à zéro
    row.querySelector('.bouton-moins').disabled = false;
}

function diminuerQuantite(button) {
    var row = button.parentNode.parentNode;
    var quantiteSpan = row.querySelector('.quantite-commandee');
    var stock = parseInt(row.querySelector('.Stock').textContent);
    var quantiteCommandee = parseInt(quantiteSpan.textContent);
    
    if (quantiteCommandee > 0) {
        quantiteSpan.textContent = quantiteCommandee - 1;
    }

    // Désactiver le bouton "-" si la quantité commandée atteint zéro
    if (quantiteCommandee - 1 === 0) {
        button.disabled = true;
    }

    // Réactiver le bouton "+" si la quantité commandée est inférieure au stock
    if (quantiteCommandee < stock) {
        row.querySelector('.bouton-plus').disabled = false;
    }
}