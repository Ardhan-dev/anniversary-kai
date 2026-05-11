import fs from 'fs';
import path from 'path';

const directoryPath = './public/images';
const files = fs.readdirSync(directoryPath);

// Filter hanya file gambar
const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// Urutkan berdasarkan nama (biar urutan tanggalnya bener)
images.sort();

const data = images.map((file, index) => ({
  id: index,
  url: `/images/${file}`,
  caption: `Memori kita - ${file.split('_')[1] || ''}`, // Ambil tanggal dari nama file
  date: "2026"
}));

fs.writeFileSync('./src/photos.json', JSON.stringify(data, null, 2));
console.log("Mantap! 100+ foto kamu sudah masuk ke src/photos.json");