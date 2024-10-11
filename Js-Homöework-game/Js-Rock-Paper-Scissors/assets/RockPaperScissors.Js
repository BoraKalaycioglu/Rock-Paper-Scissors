let oyuncununHamlesi = prompt("Hamleni Gir!: Taş, Kağıt, Makas");
console.log('Oyuncu Hamlesi: ' + oyuncununHamlesi);

let bilgisayarınHamlesi = ["Taş", "Kağıt", "Makas"].at(Math.floor(Math.random() * 3));

console.log("Bilgisayarın hamlesi: " + bilgisayarınHamlesi);

if (oyuncununHamlesi === bilgisayarınHamlesi) {
    console.log("Berabere , Bir El Daha ?");
} else if (
  (oyuncununHamlesi === "Kağıt" && bilgisayarınHamlesi === "Taş") ||
  (oyuncununHamlesi === "Taş" && bilgisayarınHamlesi === "Makas") ||
  (oyuncununHamlesi === "Makas" && bilgisayaınrHamlesi === "Kağıt")
) {
    console.log("Helal Lan");
} else {
    console.log("Tüh Kaybettin Tekrar Oyna...");
}



