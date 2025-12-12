let n = nombre(prompt("Entre un nombre:"));
if (n < 0) {
  console.log("Nombre négatif");
} else {
  if (n <= 10) {
    console.log("Nombre petit");
  } else {
    if (n <= 50) {
      console.log("Nombre moyen");
    } else {
      if (n > 100) {
        console.log("Nombre très grand");
      } else {
        console.log("Nombre grand");
      }
    }
  }
}
