function removeElement(array, position) {
  if (position === 'left') {
    array.shift();
  } else if (position === 'right') {
    array.pop();
  }
  return array;
}
/* Menggunakan if dan else if untuk mengecek nilai
position. Jika position adalah 'left', maka kita
akan menghapus elemen pertama pada array dengan
menggunakan method shift(). Jika position adalah
'right', maka kita akan menghapus elemen terakhir
pada array dengan menggunakan method pop().
Kemudian, kita akan mengembalikan array yang telah
dihapus elemen sesuai dengan position-nya.*/