// =======================================================
// CÓDIGO PENAL OASIS – BASE ATUAL
// NUMERAÇÃO REAL (ART. 29 NÃO EXISTE)
// =======================================================

const artigos = [
 {n:1,nm:"Direção Perigosa",p:15,m:2000,f:1500},
 {n:2,nm:"Homicídio Culposo",p:30,m:6000,f:null},
 {n:3,nm:"Homicídio Doloso",p:40,m:12000,f:null},
 {n:4,nm:"Furto",p:30,m:4000,f:8500},
 {n:5,nm:"Roubo",p:30,m:3500,f:8500},
 {n:6,nm:"Latrocínio",p:45,m:8000,f:null},
 {n:7,nm:"Agressão ou Lesão Corporal",p:20,m:4000,f:7000},
 {n:8,nm:"Genocídio",p:70,m:7000,f:null},
 {n:9,nm:"Terrorismo",p:70,m:10000,f:15000},
 {n:10,nm:"Sequestro",p:50,m:5000,f:null},
 {n:11,nm:"Cárcere Privado",p:35,m:3000,f:6000},
 {n:12,nm:"Omissão de Socorro",p:30,m:8000,f:3000},
 {n:13,nm:"Maus Tratos",p:40,m:5000,f:null},
 {n:14,nm:"Difamação",p:30,m:2500,f:8500},
 {n:15,nm:"Injúria",p:20,m:2500,f:8500},
 {n:16,nm:"Calúnia",p:20,m:2500,f:8500},
 {n:17,nm:"Atentado Violento ao Pudor",p:250,m:0,f:null},
 {n:18,nm:"Ameaça",p:30,m:2000,f:10000},
 {n:19,nm:"Uso Indevido de Imagem",p:0,m:3500,f:7000},
 {n:20,nm:"Abandono de Incapaz",p:30,m:8000,f:7000},
 {n:21,nm:"Incitar a Prática de Crime",p:25,m:6250,f:3000},
 {n:22,nm:"Formação de Quadrilha",p:45,m:5000,f:7000},
 {n:23,nm:"Tráfico de Drogas",p:50,m:2500,f:1000},
 {n:24,nm:"Porte Ilegal de Arma",p:50,m:7500,f:12000},
 {n:25,nm:"Uso Indevido do Porte de Armas",p:40,m:2000,f:2000},
 {n:26,nm:"Tráfico de Material Ilegal",p:25,m:4000,f:8750},
 {n:27,nm:"Tráfico Ilegal de Armas",p:60,m:9500,f:10000},
 {n:28,nm:"Fuga de Abordagem",p:20,m:1500,f:2500},

 {n:30,nm:"Perturbação da Ordem Pública",p:15,m:1500,f:2500},
 {n:31,nm:"Porte de Dinheiro Sujo",p:15,m:1500,f:2000},
 {n:32,nm:"Uso de Vestimenta de Servidor Público",p:15,m:1500,f:1700},
 {n:33,nm:"Falsidade Ideológica",p:25,m:2250,f:3125},
 {n:34,nm:"Desacato à Autoridade",p:25,m:4000,f:4000},
 {n:35,nm:"Abandono de Função",p:25,m:4000,f:2500},
 {n:36,nm:"Desobediência de Ordem Legal",p:25,m:5000,f:5000},
 {n:37,nm:"Tentativa de Suborno",p:40,m:4000,f:8750},
 {n:38,nm:"Abuso de Autoridade",p:25,m:4000,f:2500},
 {n:39,nm:"Fraudar Informações",p:20,m:3000,f:2000},
 {n:40,nm:"Corrida Ilegal",p:30,m:5000,f:2250},
 {n:41,nm:"Invasão aos Órgãos Públicos",p:20,m:3000,f:2000},
 {n:42,nm:"Invasão de Domicílio",p:20,m:3500,f:2500},
 {n:43,nm:"Veículo Danificado",p:0,m:5000,f:5000},
 {n:44,nm:"Legítima Defesa",p:0,m:0,f:0},
 {n:45,nm:"Resistência à Prisão",p:20,m:2500,f:7000},
 {n:46,nm:"Perturbação do Sossego Público",p:0,m:7500,f:0},
 {n:47,nm:"Prevaricação",p:30,m:4000,f:2000},
 {n:48,nm:"Desmanche de Veículo",p:30,m:2000,f:4500},
 {n:49,nm:"Ocultação de Provas",p:20,m:1500,f:3000},
 {n:50,nm:"Descaminho",p:40,m:20000,f:8500},
 {n:51,nm:"Peculato",p:20,m:2000,f:3000},
 {n:52,nm:"Vadiagem",p:15,m:1000,f:2000},
 {n:53,nm:"Vandalismo",p:25,m:2500,f:3000},
 {n:54,nm:"Perjúrio",p:20,m:1500,f:2500},
 {n:55,nm:"Cúmplice",p:20,m:2000,f:4300},
 {n:56,nm:"Apologia ao Crime",p:15,m:1500,f:2500},
 {n:57,nm:"Tráfico de Influência",p:20,m:3000,f:4500},
 {n:58,nm:"Obstrução de Justiça",p:20,m:3000,f:4500},
 {n:59,nm:"Associação Criminosa",p:30,m:2500,f:4000},
 {n:60,nm:"Associação ao Tráfico",p:30,m:2500,f:4000},
 {n:61,nm:"Receptação de Veículos",p:25,m:1500,f:2500},
 {n:62,nm:"Tentativa de Furto",p:20,m:1500,f:5000},
 {n:63,nm:"Tentativa de Roubo",p:20,m:1500,f:5000},
 {n:64,nm:"Extorsão",p:20,m:2000,f:5000},
 {n:65,nm:"Assédio",p:20,m:1500,f:3000}
];

// =======================================================
// UTIL
// =======================================================
const norm = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
let selecionados = new Map();
const cont = document.getElementById("artigosContainer");

// =======================================================
// PESQUISA
// =======================================================
document.getElementById("searchButton").onclick = () => {
  const t = document.getElementById("searchInput").value.trim();
  cont.innerHTML = "";
  cont.style.display = "block";

  artigos.filter(a =>
    !isNaN(t) ? a.n === Number(t) : norm(a.nm).includes(norm(t))
  ).forEach(a => {
    const d = document.createElement("div");
    d.className = "article";
    d.innerHTML = `
      <strong>Art. ${a.n} – ${a.nm}</strong>
      <p>Pena: ${a.p} meses | Multa: R$ ${a.m} |
      Fiança: ${a.f === null ? "INAFIANÇÁVEL" : "R$ " + a.f}</p>
      <label><input type="checkbox"> Selecionar</label>`;
    const cb = d.querySelector("input");
    cb.checked = selecionados.has(a.n);
    cb.onchange = () => cb.checked ? selecionados.set(a.n,a) : selecionados.delete(a.n);
    cont.appendChild(d);
  });
};

// =======================================================
// CALCULAR
// =======================================================
function calcular() {
  let p=0,m=0,f=0,inaf=false;
  selecionados.forEach(a=>{
    p+=a.p; m+=a.m;
    if(a.f===null) inaf=true;
    else f+=a.f;
  });

  let perc=0;
  document.querySelectorAll(".atenuante:checked")
    .forEach(a=>perc+=Number(a.dataset.percent));
  if(perc>0.4) perc=0.4;

  document.getElementById("resultado").innerHTML = `
    <strong>Artigos:</strong> ${[...selecionados.keys()].join(", ") || "Nenhum"}<br>
    <strong>Pena Final:</strong> ${p - Math.round(p*perc)} meses<br>
    <strong>Multa:</strong> R$ ${m}<br>
    <strong>Fiança:</strong> ${inaf ? "INAFIANÇÁVEL" : "R$ " + f}
  `;
}

// =======================================================
// LIMPAR (DEFINITIVO)
// =======================================================
function limparCalculo() {
  selecionados.clear();
  cont.innerHTML="";
  cont.style.display="none";
  document.getElementById("searchInput").value="";
  document.getElementById("resultado").innerHTML="";
  document.getElementById("descricaoAtenuantes").innerHTML="Nenhuma atenuante selecionada.";
  document.querySelectorAll("input[type='checkbox']").forEach(c=>c.checked=false);
}
