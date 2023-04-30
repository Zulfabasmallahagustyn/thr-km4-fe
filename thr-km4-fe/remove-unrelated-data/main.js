function removeData(object, keys) {
  const newObj = { ...object }; // membuat object baru menggunakan spread operator (...object).
  keys.split(",").forEach((key) => { // memisahkan key yang akan dihapus dari object menggunakan berdasarkan tanda baca "," dan akan melakukan iterasi pada array yang dihasilkan oleh split() menggunakan method forEach()
    delete newObj[key.trim()]; // pada setiap iterasi, akan menghapus key dari object baru menggunakan method delete.
  });
  return newObj; // mengembalikan object baru yang sudah dihapus key-value-nya.
}
/* Pertama, objek object di-clone ke objek newObj
dengan menggunakan spread operator (...). Kemudian,
string keys dipecah berdasarkan koma, kemudian tiap
key di-trim (menghapus whitespace di awal dan akhir)
dan dihapus dari objek newObj dengan menggunakan
delete. Setelah itu, newObj dikembalikan sebagai
hasil akhir. */