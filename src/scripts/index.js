import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import main from './main';

console.log('Hello Coders! :)'); 

/**
 * Muncukan navbar ketika halaman di scroll ke bawah
 * 
 **/ 

// Menampilkan konten
document.addEventListener('DOMContentLoaded', main)