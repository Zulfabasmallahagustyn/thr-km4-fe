function addMoreData(object, key, value) {
  // Menggunakan Object.assign
  return Object.assign({}, object, { [key]: value });
}
/* Membuat sebuah object baru dengan {}, kemudian
menggabungkan object tersebut dengan object yang
diberikan dan tambahan key-value baru yang
dihasilkan dari { [key]: value }.*/