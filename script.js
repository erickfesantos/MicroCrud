let parte_2 = document.querySelector('#parte2'); 
let opcoes = [...document.querySelectorAll('input[name="opcao"]')];
let botao_nome_selecionado = document.querySelector('#Nselecionado');
let botao_remover_selecionado = document.querySelector('#Rselecionado');
let botao_adicionar_elemento = document.querySelector('#adicionar');
let texto = document.querySelector('#texto');

function input_selecionado(){
  let selecionado_array = [...document.querySelectorAll('input[name="opcao"]:checked')];
  return selecionado_array[0];
}

botao_nome_selecionado.addEventListener("click", ()=>{
  let selecionado = input_selecionado();
  alert('O nome selecionado foi: ' + selecionado.parentNode.firstChild.textContent);
});

botao_remover_selecionado.addEventListener("click", ()=>{
  let selecionado = input_selecionado();
  selecionado.parentNode.remove();
});


botao_adicionar_elemento.addEventListener("click", ()=>{
  //criar restrição para só conseguir ADICIONAR se tiver texto no input
 // Criar função para essa parte do Código
  let div = document.createElement("div")
  div.setAttribute("class", "opcoes");
  let paragrafo = document.createElement("p")
  let input = document.createElement("input")
  input.setAttribute("type", "radio");
  input.setAttribute("name", "opcao");
  div.appendChild(paragrafo);
  div.appendChild(input);
  paragrafo.textContent = texto.value;
  parte_2.appendChild(div);
  texto.value = '';
});



