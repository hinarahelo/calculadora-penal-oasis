// =======================================================
// CÓDIGO PENAL OASIS — ARTIGOS 1 AO 65 (PDF OFICIAL)
// =======================================================

const artigos = [
  {numero:1,nome:"Direção Perigosa",pena:15,multa:2000,fianca:1500},
  {numero:2,nome:"Homicídio Culposo",pena:30,multa:6000,fianca:null},
  {numero:3,nome:"Homicídio Doloso",pena:40,multa:12000,fianca:null},
  {numero:4,nome:"Furto",pena:30,multa:4000,fianca:8500},
  {numero:5,nome:"Roubo",pena:30,multa:3500,fianca:8500},
  {numero:6,nome:"Latrocínio",pena:45,multa:8000,fianca:null},
  {numero:7,nome:"Agressão ou Lesão Corporal",pena:20,multa:4000,fianca:7000},
  {numero:8,nome:"Genocídio",pena:70,multa:7000,fianca:null},
  {numero:9,nome:"Terrorismo",pena:70,multa:10000,fianca:15000},
  {numero:10,nome:"Sequestro",pena:50,multa:5000,fianca:null},
  {numero:11,nome:"Cárcere Privado",pena:35,multa:3000,fianca:6000},
  {numero:12,nome:"Omissão de Socorro",pena:30,multa:8000,fianca:3000},
  {numero:13,nome:"Maus Tratos",pena:40,multa:5000,fianca:null},
  {numero:14,nome:"Difamação",pena:30,multa:2500,fianca:8500},
  {numero:15,nome:"Injúria",pena:20,multa:2500,fianca:8500},
  {numero:16,nome:"Calúnia",pena:20,multa:2500,fianca:8500},
  {numero:17,nome:"Atentado Violento ao Pudor",pena:250,multa:0,fianca:null},
  {numero:18,nome:"Ameaça",pena:30,multa:2000,fianca:10000},
  {numero:19,nome:"Uso Indevido de Imagem",pena:0,multa:3500,fianca:7000},
  {numero:20,nome:"Abandono de Incapaz",pena:30,multa:8000,fianca:7000},
  {numero:21,nome:"Incitar a Prática de Crime",pena:25,multa:6250,fianca:3000},
  {numero:22,nome:"Formação de Quadrilha",pena:45,multa:5000,fianca:7000},
  {numero:23,nome:"Tráfico de Drogas",pena:50,multa:2500,fianca:1000},
  {numero:24,nome:"Porte Ilegal de Arma",pena:50,multa:7500,fianca:12000},
  {numero:25,nome:"Uso Indevido do Porte de Armas",pena:40,multa:2000,fianca:2000},
  {numero:26,nome:"Tráfico de Material Ilegal",pena:25,multa:4000,fianca:8750},
  {numero:27,nome:"Tráfico Ilegal de Armas",pena:60,multa:9500,fianca:10000},
  {numero:28,nome:"Fuga de Abordagem",pena:20,multa:1500,fianca:2500},
  {numero:30,nome:"Perturbação da Ordem Pública",pena:15,multa:1500,fianca:2500},
  {numero:31,nome:"Porte de Dinheiro Sujo",pena:15,multa:1500,fianca:2000},
  {numero:32,nome:"Uso de Vestimenta de Servidor Público",pena:15,multa:1500,fianca:1700},
  {numero:33,nome:"Falsidade Ideológica",pena:25,multa:2250,fianca:3125},
  {numero:34,nome:"Desacato à Autoridade",pena:25,multa:4000,fianca:4000},
  {numero:35,nome:"Abandono de Função",pena:25,multa:4000,fianca:2500},
  {numero:36,nome:"Desobediência de Ordem Legal",pena:25,multa:5000,fianca:5000},
  {numero:37,nome:"Tentativa de Suborno",pena:40,multa:4000,fianca:8750},
  {numero:38,nome:"Abuso de Autoridade",pena:25,multa:4000,fianca:2500},
  {numero:39,nome:"Fraudar Informações",pena:20,multa:3000,fianca:2000},
  {numero:40,nome:"Corrida Ilegal",pena:30,multa:5000,fianca:2250},
  {numero:41,nome:"Invasão aos Órgãos Públicos",pena:20,multa:3000,fianca:2000},
  {numero:42,nome:"Invasão de Domicílio",pena:20,multa:3500,fianca:2500},
  {numero:43,nome:"Veículo Danificado",pena:0,multa:5000,fianca:5000},
  {numero:44,nome:"Legítima Defesa",pena:0,multa:0,fianca:0},
  {numero:45,nome:"Resistência à Prisão",pena:20,multa:2500,fianca:7000},
  {numero:46,nome:"Perturbação do Sossego Público",pena:0,multa:7500,fianca:0},
  {numero:47,nome:"Prevaricação",pena:30,multa:4000,fianca:2000},
  {numero:48,nome:"Desmanche de Veículo",pena:30,multa:2000,fianca:4500},
  {numero:49,nome:"Ocultação de Provas",pena:20,multa:1500,fianca:3000},
  {numero:50,nome:"Descaminho",pena:40,multa:20000,fianca:8500},
  {numero:51,nome:"Peculato",pena:20,multa:2000,fianca:3000},
  {numero:52,nome:"Vadiagem",pena:15,multa:1000,fianca:2000},
  {numero:53,nome:"Vandalismo",pena:25,multa:2500,fianca:3000},
  {numero:54,nome:"Perjúrio",pena:20,multa:1500,fianca:2500},
  {numero:55,nome:"Cúmplice",pena:20,multa:2000,fianca:4300},
  {numero:56,nome:"Apologia ao Crime",pena:15,multa:1500,fianca:2500},
  {numero:57,nome:"Tráfico de Influência",pena:20,multa:3000,fianca:4500},
  {numero:58,nome:"Obstrução de Justiça",pena:20,multa:3000,fianca:4500},
  {numero:59,nome:"Associação Criminosa",pena:30,multa:2500,fianca:4000},
  {numero:60,nome:"Associação ao Tráfico",pena:30,multa:2500,fianca:4000},
  {numero:61,nome:"Receptação de Veículos",pena:25,multa:1500,fianca:2500},
  {numero:62,nome:"Tentativa de Furto",pena:20,multa:1500,fianca:5000},
  {numero:63,nome:"Tentativa de Roubo",pena:20,multa:1500,fianca:5000},
  {numero:64,nome:"Extorsão",pena:20,multa:2000,fianca:5000},
  {numero:65,nome:"Assédio",pena:20,multa:1500,fianca:3000}
];

// =======================================================
// ESTADO
// =======================================================
const artigosContainer = document.getElementById("artigosContainer");
const selecionados = new Map();

// =======================================================
// PESQUISA (AGORA FUNCIONA)
// =======================================================
document.getElementById("searchButton").onclick = () => {
  const termo = document.getElementById("searchInput").value.toLowerCase();

  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "block"; // ✅ CORREÇÃO

  artigos
    .filter(a => a.numero.toString() === termo || a.nome.toLowerCase().includes(termo))
    .forEach(a => {
      const marcado = selecionados.has(a.numero) ? "checked" : "";
      artigosContainer.innerHTML += `
        <div class="article">
          <strong>Art. ${a.numero} – ${a.nome}</strong>
          <p>Pena: ${a.pena} meses | Multa: R$ ${a.multa} | 
          Fiança: ${a.fianca === null ? "INAFIANÇÁVEL" : "R$ " + a.fianca}</p>
          <label>
            <input type="checkbox" ${marcado}
              onchange="toggleArtigo(${a.numero})">
            Selecionar
          </label>
        </div>
      `;
    });
};

function toggleArtigo(numero) {
  const art = artigos.find(a => a.numero === numero);
  if (selecionados.has(numero)) selecionados.delete(numero);
  else selecionados.set(numero, art);
}

// =======================================================
// CÁLCULO E LIMPAR (IGUAL AO ANTERIOR)
// =======================================================

function calcular() {
  let pena=0,multa=0,fianca=0,inafiancavel=false;

  selecionados.forEach(a=>{
    pena+=a.pena;
    multa+=a.multa;
    if(a.fianca===null) inafiancavel=true;
    else fianca+=a.fianca;
  });

  let perc=0;
  document.querySelectorAll(".atenuante:checked").forEach(a=>perc+=+a.dataset.percent);
  if(perc>0.4) perc=0.4;

  const red=Math.round(pena*perc);

  document.getElementById("resultado").innerHTML=`
    <strong>Artigos:</strong> ${[...selecionados.keys()].join(", ") || "Nenhum"}<br>
    Pena Final: ${pena-red} meses<br>
    Multa: R$ ${multa}<br>
    Fiança: ${inafiancavel ? "INAFIANÇÁVEL" : "R$ "+fianca}
  `;
}

function limparCalculo(){
  selecionados.clear();
  artigosContainer.innerHTML="";
  artigosContainer.style.display="none";
  document.getElementById("resultado").innerHTML="";
  document.getElementById("searchInput").value="";
  document.querySelectorAll("input[type=checkbox]").forEach(c=>c.checked=false);
}
