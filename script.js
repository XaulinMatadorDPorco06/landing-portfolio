let cliques = 0;
const btn = document.getElementById('btn-contador');
const contador = document.getElementById('contador');

btn.addEventListener('click', () => {
    cliques++;
    contador.textContent = cliques;
});