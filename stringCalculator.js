function add(numbers) {
    // 1️⃣ Cas chaîne vide
    if (numbers === '') {
        return 0;
    }

    // 2️⃣ Définition des séparateurs par défaut : virgule ou retour à la ligne
    let delimiter = /,|\n/;
    let numbersPart = numbers;

    // 3️⃣ Vérification d’un séparateur personnalisé
    if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    // On récupère le délimiteur et on l'échappe pour la Regex
    const rawDelimiter = parts[0].substring(2);
    // On crée une regex qui inclut le nouveau délimiteur ET les anciens (\n)
    delimiter = new RegExp(`${rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|\\n`);
    numbersPart = parts.slice(1).join("\n"); // Gestion au cas où il y aurait d'autres \n
    }

    // 4️⃣ Transformation de la chaîne en tableau de nombres
    const numsArray = numbersPart
        .split(new RegExp(delimiter))
        .map(Number);

    // 5️⃣ Vérification des nombres négatifs
    const negatives = numsArray.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed. [${negatives.join(",")}]`);
    }

    // 6️⃣ Calcul de la somme
    return numsArray.reduce((acc, n) => acc + n, 0);
}

module.exports = add;