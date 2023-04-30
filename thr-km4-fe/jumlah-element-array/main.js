function howManyElements(data) {
  return data.length;
}
/*Dalam soal ini, hanya perlu mengembalikan panjang
larik masukan, yang dapat diperoleh dengan mudah
menggunakan properti length di JavaScript*/
console.log(howManyElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(howManyElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 11
console.log(howManyElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // 12
console.log(howManyElements([1, 2, 3, 4, 5])); // 5
console.log(howManyElements(['Edo', 'Budi', 'Joko', 'Tono'])); // 4
console.log(howManyElements(['Edo', 'Budi', 'Joko', 'Tono', 'Edo', 'Budi', 'Joko', 'Tono'])); // 8
console.log(howManyElements([true, false, true, false, true, false])); // 6
