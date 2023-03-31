let btnOne = document.querySelector('.btn-one')
let btnTwo = document.querySelector('.btn-two')
let calc = document.querySelector('.calc')

let i = 0;
btnOne.addEventListener('click', () =>{
    let timer = setInterval(() =>{
        i++
        calc.textContent = i
    },1000)
    calc.style.color = 'green'

    btnTwo.addEventListener('click', () =>{
        setTimeout(() =>{
            clearInterval(timer)
        })
        calc.style = 0
    })
})
