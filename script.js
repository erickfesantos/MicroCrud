const parte_2 = document.querySelector('#parte2'); 
const caixas = [...document.querySelectorAll('.opcoes')];
const botao_nome_selecionado = document.querySelector('#Nselecionado');
const botao_remover_selecionado = document.querySelector('#Rselecionado');
const botao_adicionar_elemento = document.querySelector('#adicionar');
const botao_adicionar_elemento_antes = document.querySelector('#adicionar_antes');
const botao_adicionar_elemento_depois = document.querySelector('#adicionar_depois');
const texto = document.querySelector('#texto');

function caixa_selecionada(){
  let selecionado_array = [...document.querySelectorAll('.selecao_vermelha')];
  return selecionado_array[0];
}

function remover_selecao(){
  let caixas_para_remover = [...document.querySelectorAll('.opcoes')];
  caixas_para_remover.map((elemento)=>{
    elemento.classList.remove("selecao_vermelha");
  })
}

function criar_div(){
    let div = document.createElement("div")
    div.setAttribute("class", "opcoes");
    let paragrafo = document.createElement("p")
    div.appendChild(paragrafo);
    div.addEventListener("click", ()=>{
      remover_selecao();
      div.classList.toggle("selecao_vermelha");
    });
    paragrafo.textContent = texto.value;
    return div;
}

caixas.map((elemento)=>{
  elemento.addEventListener("click", ()=>{
    remover_selecao();
    elemento.classList.toggle("selecao_vermelha");
  });
});


botao_nome_selecionado.addEventListener("click", ()=>{
  let selecionado = caixa_selecionada();
  alert('O nome selecionado foi: ' + selecionado.textContent);
});

botao_remover_selecionado.addEventListener("click", ()=>{
  let selecionado = caixa_selecionada();
  selecionado.remove();
});


botao_adicionar_elemento.addEventListener("click", ()=>{
  if(texto.value != ''){
    parte_2.appendChild(criar_div());
    texto.value = '';
  }else{
    alert("Digite o nome da nova caixa no campo abaixo");
  }
});

botao_adicionar_elemento_antes.addEventListener("click", ()=>{
    if(texto.value != ''){
      let selecionado = caixa_selecionada();
      parte_2.insertBefore(criar_div(), selecionado);
      texto.value = '';
    }else{
      alert("Digite o nome da nova caixa no campo abaixo");
  }
});

botao_adicionar_elemento_depois.addEventListener("click", ()=>{
    if(texto.value != ''){
      let selecionado = caixa_selecionada();
      parte_2.insertBefore(criar_div(), selecionado.nextSibling);
      texto.value = '';
    }else{
      alert("Digite o nome da nova caixa no campo abaixo");
    }
});


