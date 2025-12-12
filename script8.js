function totalAvecRemise(total, remise) {
  return total - (total * remise) / 100;
}
let HT = nombre(prompt("Entre un total HT :"));
let remise = nombre(prompt("Entrez un pourcentage de remise :"));
let total = totalAvecRemise(HT, remise);
console.log("Le total  est : " + total);
