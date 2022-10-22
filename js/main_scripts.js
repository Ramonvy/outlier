const bt = document.querySelector('#bt_menu')
const back_ops = document.querySelector('#menu_ops')
const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')

bt.addEventListener('click', function() {
    document.getElementById('menu_ops').style.visibility = "visible";
})

back_ops.addEventListener('click', function(){
    back_ops.style.visibility = "hidden";
})

op1.addEventListener('click', function(){
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'

    })
})

op2.addEventListener('click', function(){
    window.scroll({
        top: (window.innerHeight * 2),
        behavior: 'smooth'

    })
})