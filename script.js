let quantidadeCartelas
let todasCartelas = []
let gabarito = [[], [], [], [], [], [], [], []]
let jaAlert = [, , , , , ,]

function obterQuantidadeCartelas() {



    while (true) {
        
        document.getElementById("botaoCampos").removeEventListener("click", obterQuantidadeCartelas)
        quantidadeCartelas = document.getElementById("quantidadeCartelas").value
        
        // validação do input de numero de cartelas
        if (quantidadeCartelas < 1 || quantidadeCartelas > 8 || !Number.isInteger(Number(quantidadeCartelas))) {
            window.alert("Erro: Insira um numero de 1 a 8")
            document.getElementById("quantidadeCartelas").focus()
            document.getElementById("botaoCampos").addEventListener("click", obterQuantidadeCartelas)
            return
        }

        // caso input válido, crie divs para o número de cartelas e botão para proxima função
        else {
            document.getElementById("divNumerosCartelas").innerHTML = ""
            document.getElementById("divNumerosCartelas").innerHTML += `<h4>Insira os numeros espaçados ex.: 45 78 01</h4>`
            for (let i = 0; i < quantidadeCartelas; i++) {

                document.getElementById("divNumerosCartelas").innerHTML += `<p >Insira os numeros da cartela ${i + 1}: <input id="numerosCartelas${i}"type="text"> <p>`

            }

            document.getElementById("divNumerosCartelas").innerHTML += `<input type="button" id="botaoIniciar" value="Iniciar Bingo">`

            document.getElementById("botaoIniciar").addEventListener("click", criartodasCartelas)



            return quantidadeCartelas


        }
    }




}

function criartodasCartelas() {

    document.getElementById("botaoIniciar").removeEventListener("click", criartodasCartelas)
    todasCartelas = []
    let jaAlert2 = 1
    let jaAlert4 = 1
    for (let i = 0; i < quantidadeCartelas; i++) {
        let valorCartelas = document.getElementById(`numerosCartelas${i}`).value; 
        todasCartelas.push(
            valorCartelas.split(' ')
                .filter(num => num !== '')  // Remove elementos vazios
                
        );
        console.log(valorCartelas)
    }



    todasCartelas.forEach(function (cartela) {

        cartela.forEach(function(cadaNumero){
            if (isNaN(cadaNumero) && jaAlert4 && jaAlert2 || !Number.isInteger(Number(quantidadeCartelas)) ) {
                document.getElementById("botaoIniciar").addEventListener("click", criartodasCartelas)
                window.alert("Erro:Prencha os campos apenas com numeros interios")
                jaAlert4 = 0
                document.getElementById("divNumerosCantados").innerHTML = ""
            }
        })

        if (1 >= cartela.length && jaAlert2 && jaAlert4) {
            document.getElementById("botaoIniciar").addEventListener("click", criartodasCartelas)
            window.alert("Erro:Prencha todos os campos com 2 numeros ou mais")
            jaAlert2 = 0
            document.getElementById("divNumerosCantados").innerHTML = ""




        }


        if (2 <= cartela.length && jaAlert4 && jaAlert2) {
            document.getElementById("divNumerosCantados").innerHTML = ""
            document.getElementById("divNumerosCantados").innerHTML = `<p id="pNumerosCantados">Insira o numero cantado: <input type="number" id="numeroCantado"> <input type="button" value="Verificar" id="botaoVerificar"></p>`
            for (let i = 0; i < quantidadeCartelas; i++) {
                document.getElementById("divNumerosCantados").innerHTML += `<p>A cartela ${i + 1} tem os numeros: <span id="cartelaGabarito${i}"> </span></p>`
            }


            let botaoVerificar = document.getElementById("botaoVerificar")
            botaoVerificar.addEventListener("click", verificarCantado)
        }



    })
}


function verificarCantado() {

    let jaAlert3 = 1
    if (document.getElementById("numeroCantado").value === "") {
        window.alert("Erro: Insira o numero cantado")
        document.getElementById("numeroCantado").focus()
        return
    }

    numeroCantado = (document.getElementById("numeroCantado").value)
    

    for (let incre = 0; incre < todasCartelas.length; incre++) {
       if (gabarito[incre].includes(numeroCantado)) {
            window.alert(`O numero ${numeroCantado} já joi verificado`)
            document.getElementById("numeroCantado").value = ""
            document.getElementById("numeroCantado").focus()
            return
       }

        todasCartelas[incre].forEach((numero) => {
            //Verificando e adiconando numero candatdo
            
            

            if (numeroCantado === numero && isNaN(jaAlert[incre])) {
                gabarito[incre].push(numeroCantado)
                document.getElementById(`cartelaGabarito${incre}`).innerText += `${numeroCantado}\u00A0`
                jaAlert3 = 0


            }

            


            //Alertano cartela completa


            if (isNaN(jaAlert[incre]) && gabarito[incre].length === todasCartelas[incre].length) {
                setTimeout(function(){
                    window.alert(`A cartela ${incre + 1} está completa`)
                }, 1)
               
                document.getElementById(`cartelaGabarito${incre}`).innerHTML += `<span id="spanCompleta">(Cartela completa)</span>`
                jaAlert[incre] = 1



            }


            document.getElementById("numeroCantado").value = ""
            document.getElementById("numeroCantado").focus()



        })
        
    }
    

    if (jaAlert3) {
        window.alert(`Nenhuma cartela tem o numero ${numeroCantado}`)
    }


}


let botaoCampos = document.getElementById("botaoCampos")
document.getElementById("botaoCampos").addEventListener("click", obterQuantidadeCartelas)











