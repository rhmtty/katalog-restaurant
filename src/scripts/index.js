import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/style.scss';

console.log('Hello Coders! :)'); 

/**
 * Muncukan navbar ketika halaman di scroll ke bawah
 * 
 **/ 
window.addEventListener('scroll', () => showNavbar())


const showNavbar = () => {
    const header = document.querySelector('header')
    
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.toggle('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
}