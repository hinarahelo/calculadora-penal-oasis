const artigos = [
  {id:1,nome:"Art.1 – Direção Perigosa",meses:15,multa:2000,fianca:1500},
  {id:2,nome:"Art.2 – Homicídio Culposo",meses:30,multa:6000,fianca:0,inaf:true},
  {id:3,nome:"Art.3 – Homicídio Doloso",meses:40,multa:12000,fianca:0,inaf:true},
  {id:4,nome:"Art.4 – Furto",meses:30,multa:4000,fianca:8500},
  {id:5,nome:"Art.5 – Roubo",meses:30,multa:3500,fianca:8500},
  {id:6,nome:"Art.6 – Latrocínio",meses:45,multa:8000,fianca:0,inaf:true},
  {id:7,nome:"Art.7 – Lesão Corporal",meses:20,multa:4000,fianca:7000},
  {id:8,nome:"Art.8 – Genocídio",meses:70,multa:7000,fianca:0,inaf:true},
  {id:9,nome:"Art.9 – Terrorismo",meses:70,multa:10000,fianca:0,inaf:true},
  {id:10,nome:"Art.10 – Sequestro",meses:50,multa:5000,fianca:0,inaf:true},
  {id:11,nome:"Art.11 – Cárcere Privado",meses:35,multa:3000,fianca:6000},
  {id:12,nome:"Art.12 – Omissão de Socorro",meses:30,multa:8000,fianca:3000},
  {id:13,nome:"Art.13 – Maus Tratos",meses:40,multa:5000,fianca:0,inaf:true},
  {id:14,nome:"Art.14 – Difamação",meses:30,multa:2500,fianca:8500},
  {id:15,nome:"Art.15 – Injúria",meses:20,multa:2500,fianca:8500},
  {id:16,nome:"Art.16 – Calúnia",meses:20,multa:2500,fianca:8500},
  {id:17,nome:"Art.17 – Atentado Violento ao Pudor",meses:999,multa:0,fianca:0,inaf:true},
  {id:18,nome:"Art.18 – Ameaça",meses:30,multa:2000,fianca:10000},
  {id:19,nome:"Art.19 – Uso Indevido de Imagem",meses:0,multa:3500,fianca:7000},
  {id:20,nome:"Art.20 – Abandono de Incapaz",meses:30,multa:8000,fianca:7000},
  {id:21,nome:"Art.21 – Incitar Crime",meses:25,multa:6250,fianca:3000},
  {id:22,nome:"Art.22 – Formação de Quadrilha",meses:45,multa:5000,fianca:7000},
  {id:23,nome:"Art.23 – Tráfico de Drogas",meses:50,multa:2500,fianca:1000},
  {id:24,nome:"Art.24 – Porte Ilegal de Arma",meses:50,multa:7500,fianca:12000},
  {id:25,nome:"Art.25 – Uso Indevido do Porte",meses:40,multa:2000,fianca:2000},
  {id:26,nome:"Art.26 – Tráfico de Material Ilegal",meses:25,multa:4000,fianca:8750},
  {id:27,nome:"Art.27 – Tráfico Ilegal de Armas",meses:60,multa:9500,fianca:10000},
  {id:28,nome:"Art.28 – Fuga de Abordagem",meses:20,multa:1500,fianca:2500},
  {id:29,nome:"Art.29 – (Não utilizado)",meses:0,multa:0,fianca:0},
  {id:30,nome:"Art.30 – Perturbação da Ordem",meses:15,multa:1500,fianca:2500},
  {id:31,nome:"Art.31 – Dinheiro Sujo",meses:15,multa:1500,fianca:2000},
  {id:32,nome:"Art.32 – Uso de Vestimenta Oficial",meses:15,multa:1500,fianca:1700},
  {id:33,nome:"Art.33 – Falsidade Ideológica",meses:25,multa:2250,fianca:3125},
  {id:34,nome:"Art.34 – Desacato",meses:25,multa:4000,fianca:4000},
  {id:35,nome:"Art.35 – Abandono de Função",meses:25,multa:4000,fianca:2500},
  {id:36,nome:"Art.36 – Desobediência",meses:25,multa:5000,fianca:5000},
  {id:37,nome:"Art.37 – Tentativa de Suborno",meses:40,multa:4000,fianca:8750},
  {id:38,nome:"Art.38 – Abuso de Autoridade",meses:25,multa:4000,fianca:2500},
  {id:39,nome:"Art.39 – Fraudar Informações",meses:20,multa:3000,fianca:2000},
  {id:40,nome:"Art.40 – Corrida Ilegal",meses:30,multa:5000,fianca:2250},
  {id:41,nome:"Art.41 – Invasão Órgão Público",meses:20,multa:3000,fianca:2000},
  {id:42,nome:"Art.42 – Invasão de Domicílio",meses:20,multa:3500,fianca:2500},
  {id:43,nome:"Art.43 – Veículo Danificado",meses:0,multa:5000,fianca:0},
  {id:44,nome:"Art.44 – Legítima Defesa",meses:0,multa:0,fianca:0},
  {id:45,nome:"Art.45 – Resistência à Prisão",meses:20,multa:2500,fianca:7000},
  {id:46,nome:"Art.46 – Perturbação do Sossego",meses:0,multa:7500,fianca:0},
  {id:47,nome:"Art.47 – Prevaricação",meses:30,multa:4000,fianca:2000},
  {id:48,nome:"Art.48 – Desmanche",meses:30,multa:2000,fianca:4500},
  {id:49,nome:"Art.49 – Ocultação de Provas",meses:20,multa:1500,fianca:3000},
  {id:50,nome:"Art.50 – Descaminho",meses:40,multa:20000,fianca:8500},
  {id:51,nome:"Art.51 – Peculato",meses:20,multa:2000,fianca:3000},
  {id:52,nome:"Art.52 – Vadiagem",meses:15,multa:1000,fianca:2000},
  {id:53,nome:"Art.53 – Vandalismo",meses:25,multa:2500,fianca:3000},
  {id:54,nome:"Art.54 – Perjúrio",meses:20,multa:1500,fianca:2500},
  {id:55,nome:"Art.55 – Cúmplice",meses:20,multa:2000,fianca:4300},
  {id:56,nome:"Art.56 – Apologia ao Crime",meses:15,multa:1500,fianca:2500},
  {id:57,nome:"Art.57 – Tráfico de Influência",meses:20,multa:3000,fianca:4500},
  {id:58,nome:"Art.58 – Obstrução da Justiça",meses:20,multa:3000,fianca:4500},
  {id:59,nome:"Art.59 – Associação Criminosa",meses:30,multa:2500,fianca:4000},
  {id:60,nome:"Art.60 – Associação ao Tráfico",meses:30,multa:2500,fianca:4000},
  {id:61,nome:"Art.61 – Receptação de Veículos",meses:25,multa:1500,fianca:2500},
  {id:62,nome:"Art.62 – Tentativa de Furto",meses:20,multa:1500,fianca:5000},
  {id:63,nome:"Art.63 – Tentativa de Roubo",meses:20,multa:1500,fianca:5000},
  {id:64,nome:"Art.64 – Extorsão",meses:20,multa:2000,fianca:5000},
  {id:65,nome:"Art.65 – Assédio",meses:20,multa:1500,fianca:3000}
];

// RENDERIZA ARTIGOS
const lista = document.getElementById("artigos");
artigos.forEach(a => {
  lista.innerHTML += `<label><input type="checkbox" data-id="${a.id}"> ${a.nome}</label>`;
});

function calcular() {
  let pena = 0, multa = 0, fianca = 0, inaf = false;

  document.querySelectorAll("input[data-id]:checked").forEach(el => {
    const art = artigos.find(a => a.id == el.dataset.id);
    pena += art.meses;
    multa += art.multa;
    fianca += art.fianca;
    if (art.inaf) inaf = true;
  });

  let reducao = 0;
  if (primario.checked) reducao += 0.10;
  if (confissao.checked) reducao += 0.10;
  if (colaboracao.checked) reducao += 0.10;
  if (bons.checked) reducao += 0.05;
  if (servidor.checked) reducao += 0.05;
  if (reducao > 0.30) reducao = 0.30;

  pena = Math.max(1, Math.round(pena * (1 - reducao)));
  multa = Math.round(multa * (1 - reducao));
  if (!inaf) fianca = Math.round(fianca * (1 - reducao));

  penaSpan.innerText = pena;
  multaSpan.innerText = multa.toLocaleString("pt-BR");
  fiancaSpan.innerText = inaf ? "INAFIANÇÁVEL" : "R$ " + fianca.toLocaleString("pt-BR");
}

const penaSpan = document.getElementById("pena");
const multaSpan = document.getElementById("multa");
const fiancaSpan = document.getElementById("fianca");
