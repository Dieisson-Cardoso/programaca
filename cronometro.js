var segun=00
var min=00
var hr=00
var intervalo 
function iniciar(){
    contador()
    intervalo= setInterval(contador,1000)
}

function pausar(){
    clearInterval(intervalo)
}

function parar(){
    clearInterval(intervalo)
    segun=0
    min=0
    document.getElementById('contador').innerText='00:00:00'
}

function doisDigitos(digito){
    if (digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}


function contador(){
    segun++
    if (segun==60){
        min++
        segun=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('contador').innerText=doisDigitos(hr)+':'+doisDigitos(min)+':'+doisDigitos(segun)
}
