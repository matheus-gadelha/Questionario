function check(){

    let questoes = [];
    questoes[0] = document.querySelector('input[name="opt1"]:checked').value;
    questoes[1] = document.querySelector('input[name="opt2"]:checked').value;
    questoes[2] = document.querySelector('input[name="opt3"]:checked').value;
    questoes[3] = document.querySelector('input[name="opt4"]:checked').value;
    questoes[4] = document.querySelector('input[name="opt5"]:checked').value;


    let resultado = 0;

    for(let i = 0; i < questoes.length; i++){
        if(questoes[i] === "true"){
            resultado++;
        }
    }

    document.querySelector("#res").innerHTML = "Você acertou "+resultado+"/5 questões";


}