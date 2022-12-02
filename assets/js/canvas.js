function desenharCanvas() {
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle= "#F3F5FC"
    tabuleiro.strokeStyle = "#990000"
    tabuleiro.fillRect(0,0,1200,800)
    tabuleiro.beginPath();
    tabuleiro.moveTo(520,330)
    tabuleiro.lineTo(800,330)
    tabuleiro.stroke()
    tabuleiro.closePath()
  }
  
  function desenharLinhas() {
    tabuleiro.lineWidth=4
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle = "#990000"
    tabuleiro.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
        tabuleiro.moveTo(380+(largura*i),470)
        tabuleiro.lineTo(430+(largura*i),470)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
  }
  function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 52px Inter';
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle= "#990000"
    let largura=600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],385+(largura*index),460)
    tabuleiro.stroke()
  }
  
  function escreverLetraIncorreta(letra, errorsLeft) {
    tabuleiro.lineWidth=6
    tabuleiro.font = 'bold 25px Inter';
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle="#990000"
    tabuleiro.fillText(letra,395+(25*(10-errorsLeft)),520,25)
  }
  
  function desenharForca(pontos) {
    tabuleiro.lineWidth=4
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle = "#990000"
    if(pontos===8){
        tabuleiro.moveTo(600,329)
        tabuleiro.lineTo(600,100)
    }
    if(pontos===7){
        tabuleiro.moveTo(750,100)
        tabuleiro.lineTo(600,100)
    }
    if(pontos===6){
        tabuleiro.moveTo(750,100)
        tabuleiro.lineTo(750,160)
    }
    if(pontos===5){
        tabuleiro.moveTo(750,150)
        tabuleiro.arc(750,180,20,0,Math.PI*2)
    }
    if(pontos===4){
        tabuleiro.moveTo(750,200)
        tabuleiro.lineTo(750,260)
    }
    if(pontos===3){
        tabuleiro.moveTo(750,260)
        tabuleiro.lineTo(730,290)
    }
    if(pontos===2){
        tabuleiro.moveTo(750,260)
        tabuleiro.lineTo(775,290)
    }
    if(pontos===1){
        tabuleiro.moveTo(750,220)
        tabuleiro.lineTo(775,250)
    }
    if(pontos===0){
        tabuleiro.moveTo(750,220)
        tabuleiro.lineTo(730,250)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
  }
  
  function exibirDerrota() {
    tabuleiro.font = ' bold 42px Inter';
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle="red"
    tabuleiro.fillText("Fim de jogo!",100,220)
  }
  
  function exibirVitoria() {
    tabuleiro.font = 'bold 42px Inter';
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle="green"
    tabuleiro.fillText("Ganhou,",100,220)
    tabuleiro.fillText("Parabéns!",100,260)
    setTimeout( recarregar , 1000)
  }   
  
  function recarregar(){
    location.reload(); 
  }