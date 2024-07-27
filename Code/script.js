function searchPhotos() {
    // Récupérer l'input de recherche et convertir en minuscule pour une recherche insensible à la casse
    let input = document.getElementById('searchInput').value.toLowerCase();
    // Récupérer tous les conteneurs de photos
    let photoContainers = document.getElementsByClassName('photo-container');
    let noResults = document.getElementById('noResults');
    let found = false;

    // Boucler à travers tous les conteneurs de photos
    for (let i = 0; i < photoContainers.length; i++) {
        // Récupérer la description de la photo
        let description = photoContainers[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        // Vérifier si la description contient l'input de recherche
        if (description.includes(input)) {
            // Afficher le conteneur de photo s'il y a une correspondance
            photoContainers[i].style.display = "";
            found = true;
        } else {
            // Masquer le conteneur de photo s'il n'y a pas de correspondance
            photoContainers[i].style.display = "none";
        }
    }

    // Afficher ou masquer le message Aucun résultat trouvé
    if (found) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
}
