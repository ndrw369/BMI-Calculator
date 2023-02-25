function hitungBeratIdeal() {
  var tinggi = document.getElementById("tinggi").value;
  var jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  ).value;
  var beratIdeal;

  // Menghitung berat ideal berdasarkan rumus IMT (Indeks Massa Tubuh)
  var imt = ((tinggi / 100) * tinggi) / 100;
  if (jenisKelamin == "laki-laki") {
    beratIdeal = imt * 22;
  } else {
    beratIdeal = imt * 21;
  }

  // Menampilkan hasil perhitungan berat ideal
  document.getElementById("hasil").innerHTML =
    "Berat ideal anda adalah " + beratIdeal.toFixed(1) + " kg";
}
