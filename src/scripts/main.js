import getRestaurants from './resto'

const main = () => {
    window.addEventListener("scroll", () => showNavbar());

    const showNavbar = () => {
        const header = document.querySelector('header')
        
        if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            header.classList.add('header-scroll')
        } else {
            header.classList.remove('header-scroll')
        }
    }

    const hamburger = document.querySelector('#menu')
    const navElement = document.querySelector('nav')
    const heroElement = document.querySelector('.hero-wrapper')
    const mainElement = document.querySelector('main')

    // Menampilkan menu ketika ikon hamburger di klik
    hamburger.addEventListener('click', event => {
        navElement.classList.toggle('menu-mobile')
        event.stopPropagation()
    })

    // Menutup menu ketika gambar hero di klik
    heroElement.addEventListener('click', event => {
        navElement.classList.remove('menu-mobile')
        event.stopPropagation()
    })

    // menutup menu ketika konten di klik
    mainElement.addEventListener('click', event => {
        navElement.classList.remove('menu-mobile')
        event.stopPropagation()
    })

    // Mengambil data dari fungsi getRestaurants()
    getRestaurants()
}

export default main