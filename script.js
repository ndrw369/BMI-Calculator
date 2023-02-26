function hitungBeratIdeal() {
  let tinggi = document.getElementById("tinggi").value;
  let jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  ).value;
  let beratIdeal;

  // BMI
  let imt = ((tinggi / 100) * tinggi) / 100;
  if (jenisKelamin == "laki-laki") {
    beratIdeal = imt * 22;
  } else {
    beratIdeal = imt * 21;
  }

  // Result
  document.getElementById("hasil").innerHTML =
    "Berat ideal anda adalah " + beratIdeal.toFixed(1) + " kg";

  const myDiv = document.getElementById("hasil");
  myDiv.style.visibility = "visible";
}
