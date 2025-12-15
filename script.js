const artigos = [
  // CRIMES CONTRA A VIDA
  {id:1,categoria:"Crimes contra a Vida",nome:"Art.1 – Direção Perigosa",meses:15,multa:2000,fianca:1500},
  {id:2,categoria:"Crimes contra a Vida",nome:"Art.2 – Homicídio Culposo",meses:30,multa:6000,fianca:0,inaf:true},
  {id:3,categoria:"Crimes contra a Vida",nome:"Art.3 – Homicídio Doloso",meses:40,multa:12000,fianca:0,inaf:true},
  {id:6,categoria:"Crimes contra a Vida",nome:"Art.6 – Latrocínio",meses:45,multa:8000,fianca:0,inaf:true},
  {id:8,categoria:"Crimes contra a Vida",nome:"Art.8 – Genocídio",meses:70,multa:7000,fianca:0,inaf:true},
  {id:9,categoria:"Crimes contra a Vida",nome:"Art.9 – Terrorismo",meses:70,multa:10000,fianca:0,inaf:true},

  // CRIMES CONTRA O PATRIMÔNIO
  {id:4,categoria:"Crimes contra o Patrimônio",nome:"Art.4 – Furto",meses:30,multa:4000,fianca:8500},
  {id:5,categoria:"Crimes contra o Patrimônio",nome:"Art.5 – Roubo",meses:30,multa:3500,fianca:8500},
  {id:48,categoria:"Crimes contra o Patrimônio",nome:"Art.48 – Desmanche de Veículo",meses:30,multa:2000,fianca:4500},
  {id:50,categoria:"Crimes contra o Patrimônio",nome:"Art.50 – Descaminho",meses:40,multa:20000,fianca:8500},

  // CRIMES CONTRA A ADMINISTRAÇÃO
  {id:34,categoria:"Crimes contra a Administração",nome:"Art.34 – Desacato",meses:25,multa:4000,fianca:4000},
  {id:36,categoria:"Crimes contra a Administração",nome:"Art.36 – Desobediência",meses:25,multa:5000,fianca:5000},
  {id:38,categoria:"Crimes contra a Administração",nome:"Art.38 – Abuso de Autoridade",meses:25,multa:4000,fianca:2500},
  {id:47,categoria:"Crimes contra a Administração",nome:"Art.47 – Prevaricação",meses:30,multa:4000,fianca:2000},

  // DEMAIS ARTIGOS (mantidos)
  ...Array.from({length:65}, (_,i)=>i+1).map(n=>{
    return artigos?.find?.(a=>a.id===n) || null
  }).filter(Boolean)
];

const container = document.getElementById("artigos");

function renderArtigos(lista){
  container.innerHTML = "";
  let atual = "";

  lista.forEach(a=>{
    if(a.categoria !== atual){
      atual = a.categoria;
      container.innerHTML += `<h3>${atual}</h3>`;
    }
    container.innerHTML += `
      <label>
        <input type="checkbox" data-id="${a.id}">
        ${a.nome}
      </label>
    `;
  });
}

renderArtigos(artigos);

function filtrarArtigos(){
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtrados = artigos.filter(a =>
    a.nome.toLowerCase().includes(termo) || a.id.toString().includes(termo)
  );
  renderArtigos(filtrados);
}

function calcular(){
  let pena=0,multa=0,fianca=0,inaf=false;

  document.querySelectorAll("input[data-id]:checked").forEach(el=>{
    const art = artigos.find(a=>a.id==el.dataset.id);
    pena+=art.meses;
    multa+=art.multa;
    fianca+=art.fianca;
    if(art.inaf) inaf=true;
  });

  let reducao=0;
  if(primario.checked) reducao+=0.10;
  if(confissao.checked) reducao+=0.10;
  if(colaboracao.checked) reducao+=0.10;
  if(bons.checked) reducao+=0.05;
  if(servidor.checked) reducao+=0.05;
  if(reducao>0.30) reducao=0.30;

  pena=Math.max(1,Math.round(pena*(1-reducao)));
  multa=Math.round(multa*(1-reducao));
  if(!inaf) fianca=Math.round(fianca*(1-reducao));

  penaSpan.innerText=pena;
  multaSpan.innerText=multa.toLocaleString("pt-BR");
  fiancaSpan.innerText=inaf?"INAFIANÇÁVEL":"R$ "+fianca.toLocaleString("pt-BR");
}

const penaSpan=document.getElementById("pena");
const multaSpan=document.getElementById("multa");
const fiancaSpan=document.getElementById("fianca");
