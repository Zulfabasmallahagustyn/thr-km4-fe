function addNewElementUpDown(array, element, position) {
  if (position === 'up') {
    return [element, ...array];
  } else if (position === 'down') {
    return [...array, element];
  }
}
/* Menggunakan if dan else if untuk mengecek nilai
position. Jika position adalah up, maka kita
tambahkan element ke awal array menggunakan
spread operator dan unshift. Jika position
adalah down, maka kita tambahkan element
ke akhir array menggunakan spread
operator dan push.*/