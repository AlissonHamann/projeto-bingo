let quantidadeCartelas = Number(window.prompt("Quantas cartelas tem?"))

//Validação dos numeros
while (true) {
    //caso não seja de 1 a 8 emite alerta e pede ate ser de 1 a 8
    if (isNaN(quantidadeCartelas) || quantidadeCartelas === 0) {

        window.alert("Erro: Insira um numero de 1 a 8")
        quantidadeCartelas = Number(window.prompt("Quantas cartelas tem?"))
        continue
    }
 
    //Declaração e validação de quantidade de numeros
    var quantidadeNumeros = Number(window.prompt("Qual é a quantidade de numeros das cartelas?"))
    if(isNaN(quantidadeNumeros) || quantidadeNumeros === 0 || quantidadeNumeros > 30) {
        window.alert("Erro: Insira um numero de 1 a 30")
        continue
    }

 
    else {
        break
    }
}



// função para adicionar numeros a cartela

function adicionarNumero(quantidadeNumeros, NumeroCartela) {
    //usando incremento do segundo for para nomear cartela

    let cartela = []
    for (let incremento = 1; incremento < quantidadeNumeros + 1; incremento++) {
        cartela.push(Number(window.prompt(`Qual é o ${incremento}º numero da cartela ${NumeroCartela}?`)))
    }
    return cartela

}

//Função para criar array para cada cartela
function criartodasCartelas(quantidadeCartelas) {
    let todasCartelas = []

    for (let i = 1; i < quantidadeCartelas + 1; i++) {
        todasCartelas.push(adicionarNumero(quantidadeNumeros, i))
        
    }
    return todasCartelas
}

//Chamaando função para criar TodasCartelas
let todasCartelas = criartodasCartelas(quantidadeCartelas)

//Parte 2: vericar numero cantado
let gabarito = [[], [], [], [], [], [], []]
let jaAlert = [, , , , , ,]
while (true) {
    numeroCantado = Number(prompt("Digite o numero cantado ou 0 para parar"))

    //Quando zero para o looping
    if (numeroCantado === 0) {
        break
    }
    //laço até a quantidade de numeros da cartela
    for (let incre = 0; incre < todasCartelas.length; incre++) {
        todasCartelas[incre].forEach((numero) => {
            
            //Verificando e adiconando numero candatdo
            if (numeroCantado === numero) {
                gabarito[incre].push(numeroCantado)
                window.alert(`A cartela ${incre + 1} tem o numero: ${numeroCantado}`)
            }
            
            //Alertano cartela completa
            
            if (isNaN(jaAlert[incre]) && gabarito[incre].length === quantidadeNumeros) {
                window.alert(`A cartela ${incre + 1} está completa`)
                jaAlert[incre] = 1
                

            }


        })
    }
}




















