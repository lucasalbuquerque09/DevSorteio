
/* pegar elementos do DOM */
const botaoSortear = document.getElementById('btn-sortear');
const resultado = document.querySelector('.result');
const showResult = document.querySelector('.show-result')
const hidenResult = document.querySelector('.close')

/* mostrar resultado */
function mostrarResultado() {
    resultado.classList.add('show')
}
/* esconder resultado */
hidenResult.addEventListener('click', () => {
    resultado.classList.remove('show')
})
/* sortear número */
botaoSortear.addEventListener('click', () => {

    const valorX = Math.ceil(document.getElementById('valor-x').value);
    const valorY = Math.floor(document.getElementById('valor-y').value);

    if (valorX >= valorY) {
        showResult.textContent = "O valor minimo(entre) não pode ser maior que o valor máximo(e)"
        showResult.style.fontSize = "1rem"
        showResult.style.width = "80%"
    } else {
        const result = Math.floor(Math.random() * (valorY - valorX + 1)) + valorX;
        showResult.textContent = `${result}`
        showResult.style.fontSize = "2rem"
    }

    mostrarResultado()
})



