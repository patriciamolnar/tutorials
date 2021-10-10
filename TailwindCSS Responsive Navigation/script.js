document.addEventListener('DOMContentLoaded', () => {

    const nav = document.getElementById('nav'); 
    const navLinks = document.querySelectorAll('#nav a')

    const expandNav = () => {
        const dots = document.querySelectorAll('#burger > span');
        const first = dots[0];
        const mid = dots[1]; 
        const last = dots[2]; 

        if(first.classList.contains('transform')) {
            first.classList.remove('transform', 'translate-x-3', 'translate-y-1'); 
            last.classList.remove('transform', '-translate-x-3', '-translate-y-1'); 
        } else {
            first.classList.add('transform', 'translate-x-3', 'translate-y-1'); 
            last.classList.add('transform', '-translate-x-3', '-translate-y-1');  
        }

        nav.classList.toggle('sr-only'); 
        navLinks.forEach(link => link.classList.toggle('opacity-0'))
    }

    const burger = document.getElementById('burger'); 
    burger.addEventListener('click', expandNav);

}, false);