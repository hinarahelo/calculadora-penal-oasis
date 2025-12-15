const artigos = [
  {id:1,categoria:"Crimes contra a Vida",nome:"Art. 1 – Direção Perigosa",meses:15,multa:2000,fianca:1500},
  {id:2,categoria:"Crimes contra a Vida",nome:"Art. 2 – Homicídio Culposo",meses:30,multa:6000,fianca:0,inaf:true},
  {id:3,categoria:"Crimes contra a Vida",nome:"Art. 3 – Homicídio Doloso",meses:40,multa:12000,fianca:0,inaf:true},
  {id:4,categoria:"Crimes contra o Patrimônio",nome:"Art. 4 – Furto",meses:30,multa:4000,fianca:8500},
  {id:5,categoria:"Crimes contra o Patrimônio",nome:"Art. 5 – Roubo",meses:30,multa:3500,fianca:8500},
  // … (mantém os 65 artigos exatamente como já te enviei antes)
];

const container = document.getElementById("artigos");

function renderArtigos(lista){
  container.innerHTML = "";
  let cat = "";

  lista.forEach(a=>{
    if(a.categoria !== cat){
      cat = a.categoria;
      container.innerHTML += `<h3>${cat}</h3>`;
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

// 🔍 BUSCA POR NOME OU NÚMERO
function filtrarArtigos(){
  const termo = document.getElementById("busca").value.toLowerCase().trim();

  if(termo === ""){
    renderArtigos(artigos);
    return;
  }

  const filtrados = artigos.filter(a =>
    a.nome.toLowerCase().includes(termo) ||
    a.id.toString() === termo
  );

  renderArtigos(filtrados);
}

// ⚖️ CÁLCULO
function calcular(){
  let pena=0,multa=0,fianca=0,inaf=false;

  document.querySelectorAll("input[data-id]:checked").forEach(el=>{
    const art = artigos.find(a=>a.id==el.dataset.id);
    pena+=art.meses;
    multa+=art.multa;
    fianca+=art.fianca;
    if(art.inaf) inaf=true;
  });

  let red=0;
  if(primario.checked) red+=0.10;
  if(confissao.checked) red+=0.10;
  if(colaboracao.checked) red+=0.10;
  if(bons.checked) red+=0.05;
  if(servidor.checked) red+=0.05;
  if(red>0.30) red=0.30;

  pena=Math.max(1,Math.round(pena*(1-red)));
  multa=Math.round(multa*(1-red));
  if(!inaf) fianca=Math.round(fianca*(1-red));

  penaEl.innerText=pena;
  multaEl.innerText=multa.toLocaleString("pt-BR");
  fiancaEl.innerText=inaf?"INAFIANÇÁVEL":"R$ "+fianca.toLocaleString("pt-BR");
}
