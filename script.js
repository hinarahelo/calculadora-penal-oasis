function normalizarTexto(txt) {
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/* ================= ARTIGOS ================= */
const artigos = [
  {numero:1,nome:"Direção Perigosa",descricao:"Utilização do veículo para demonstrar manobras perigosas colocando terceiros em risco.",pena:15,multa:2000,fianca:1500},
  {numero:2,nome:"Homicídio Culposo",descricao:"Morte causada por imprudência.",pena:30,multa:6000,fianca:0},
  {numero:3,nome:"Homicídio Doloso",descricao:"Matar alguém intencionalmente.",pena:40,multa:12000,fianca:0},
  {numero:4,nome:"Furto",descricao:"Subtração de bem alheio.",pena:30,multa:4000,fianca:8500},
  {numero:5,nome:"Roubo",descricao:"Subtração mediante violência.",pena:30,multa:3500,fianca:8500},
  {numero:6,nome:"Latrocínio",descricao:"Roubo seguido de morte.",pena:45,multa:8000,fianca:0},
  {numero:7,nome:"Lesão Corporal",descricao:"Causar dano físico.",pena:20,multa:4000,fianca:7000},
  {numero:8,nome:"Genocídio",descricao:"Destruir grupo.",pena:70,multa:7000,fianca:0},
  {numero:9,nome:"Terrorismo",descricao:"Provocar terror social.",pena:70,multa:10000,fianca:15000},
  {numero:10,nome:"Sequestro",descricao:"Privar liberdade.",pena:50,multa:5000,fianca:0},
  {numero:11,nome:"Cárcere Privado",descricao:"Restringir liberdade.",pena:35,multa:3000,fianca:6000},
  {numero:12,nome:"Omissão de Socorro",descricao:"Não prestar assistência.",pena:30,multa:8000,fianca:3000},
  {numero:13,nome:"Maus Tratos",descricao:"Expor a perigo.",pena:40,multa:5000,fianca:0},
  {numero:14,nome:"Difamação",descricao:"Ofender reputação.",pena:30,multa:2500,fianca:8500},
  {numero:15,nome:"Injúria",descricao:"Ofender dignidade.",pena:20,multa:2500,fianca:8500},
  {numero:16,nome:"Calúnia",descricao:"Acusar falsamente.",pena:20,multa:2500,fianca:8500},
  {numero:17,nome:"Atentado Violento ao Pudor",descricao:"Constranger ato libidinoso.",pena:250,multa:0,fianca:0},
  {numero:18,nome:"Ameaça",descricao:"Prometer mal.",pena:30,multa:2000,fianca:10000},
  {numero:19,nome:"Uso Indevido de Imagem",descricao:"Uso sem autorização.",pena:0,multa:3500,fianca:7000},
  {numero:20,nome:"Abandono de Incapaz",descricao:"Abandonar pessoa.",pena:30,multa:8000,fianca:7000},
  {numero:21,nome:"Incitar Crime",descricao:"Incentivar crime.",pena:25,multa:6250,fianca:3000},
  {numero:22,nome:"Formação de Quadrilha",descricao:"Associação criminosa.",pena:45,multa:5000,fianca:7000},
  {numero:23,nome:"Tráfico de Drogas",descricao:"Comercialização ilícita.",pena:50,multa:2500,fianca:1000},
  {numero:24,nome:"Porte Ilegal de Arma",descricao:"Arma sem autorização.",pena:50,multa:7500,fianca:12000},
  {numero:25,nome:"Uso Indevido do Porte",descricao:"Uso ilegal.",pena:40,multa:2000,fianca:2000},
  {numero:26,nome:"Tráfico de Material Ilegal",descricao:"Distribuir bens proibidos.",pena:25,multa:4000,fianca:8750},
  {numero:27,nome:"Tráfico de Armas",descricao:"Fornecimento ilegal.",pena:60,multa:9500,fianca:10000},
  {numero:28,nome:"Fuga de Abordagem",descricao:"Evitar autoridade.",pena:20,multa:1500,fianca:2500},
  {numero:30,nome:"Perturbação da Ordem",descricao:"Alterar ordem pública.",pena:15,multa:1500,fianca:2500},
  {numero:31,nome:"Dinheiro Sujo",descricao:"Portar dinheiro ilícito.",pena:15,multa:1500,fianca:2000},
  {numero:32,nome:"Uso de Vestimenta Oficial",descricao:"Uso indevido.",pena:15,multa:1500,fianca:1700},
  {numero:33,nome:"Falsidade Ideológica",descricao:"Documento falso.",pena:25,multa:2250,fianca:3125},
  {numero:34,nome:"Desacato",descricao:"Desrespeitar autoridade.",pena:25,multa:4000,fianca:4000},
  {numero:35,nome:"Abandono de Função",descricao:"Servidor omisso.",pena:25,multa:4000,fianca:2500},
  {numero:36,nome:"Desobediência",descricao:"Não cumprir ordem.",pena:25,multa:5000,fianca:5000},
  {numero:37,nome:"Tentativa de Suborno",descricao:"Oferecer vantagem.",pena:40,multa:4000,fianca:8750},
  {numero:38,nome:"Abuso de Autoridade",descricao:"Uso indevido de poder.",pena:25,multa:4000,fianca:2500},
  {numero:39,nome:"Fraude",descricao:"Manipular dados.",pena:20,multa:3000,fianca:2000},
  {numero:40,nome:"Corrida Ilegal",descricao:"Competição ilegal.",pena:30,multa:5000,fianca:2250},
  {numero:41,nome:"Invasão Pública",descricao:"Invadir órgão público.",pena:20,multa:3000,fianca:2000},
  {numero:42,nome:"Invasão de Domicílio",descricao:"Entrar sem permissão.",pena:20,multa:3500,fianca:2500},
  {numero:43,nome:"Veículo Danificado",descricao:"Dano ao veículo.",pena:0,multa:5000,fianca:5000},
  {numero:44,nome:"Legítima Defesa",descricao:"Exclusão de ilicitude.",pena:0,multa:0,fianca:0},
  {numero:45,nome:"Resistência à Prisão",descricao:"Opor-se à prisão.",pena:20,multa:2500,fianca:7000},
  {numero:46,nome:"Perturbação do Sossego",descricao:"Perturbar lazer.",pena:0,multa:7500,fianca:0},
  {numero:47,nome:"Prevaricação",descricao:"Interesse pessoal.",pena:30,multa:4000,fianca:2000},
  {numero:48,nome:"Desmanche de Veículo",descricao:"Desmanche ilegal.",pena:30,multa:2000,fianca:4500},
  {numero:49,nome:"Ocultação de Provas",descricao:"Destruir provas.",pena:20,multa:1500,fianca:3000},
  {numero:50,nome:"Descaminho",descricao:"Sonegar imposto.",pena:40,multa:20000,fianca:8500},
  {numero:51,nome:"Peculato",descricao:"Apropriação pública.",pena:20,multa:2000,fianca:3000},
  {numero:52,nome:"Vadiagem",descricao:"Ociosidade.",pena:15,multa:1000,fianca:2000},
  {numero:53,nome:"Vandalismo",descricao:"Dano ao patrimônio.",pena:25,multa:2500,fianca:3000},
  {numero:54,nome:"Perjúrio",descricao:"Mentir sob juramento.",pena:20,multa:1500,fianca:2500},
  {numero:55,nome:"Cúmplice",descricao:"Auxiliar crime.",pena:20,multa:2000,fianca:4300},
  {numero:56,nome:"Apologia ao Crime",descricao:"Elogiar crime.",pena:15,multa:1500,fianca:2500},
  {numero:57,nome:"Tráfico de Influência",descricao:"Vantagem ilícita.",pena:20,multa:3000,fianca:4500},
  {numero:58,nome:"Obstrução de Justiça",descricao:"Embaraçar processo.",pena:20,multa:3000,fianca:4500},
  {numero:59,nome:"Associação Criminosa",descricao:"Grupo organizado.",pena:30,multa:2500,fianca:4000},
  {numero:60,nome:"Associação ao Tráfico",descricao:"União criminosa.",pena:30,multa:2500,fianca:4000},
  {numero:61,nome:"Receptação",descricao:"Produto de crime.",pena:25,multa:1500,fianca:2500},
  {numero:62,nome:"Tentativa de Furto",descricao:"Furto não consumado.",pena:20,multa:1500,fianca:5000},
  {numero:63,nome:"Tentativa de Roubo",descricao:"Roubo não consumado.",pena:20,multa:1500,fianca:5000},
  {numero:64,nome:"Extorsão",descricao:"Forçar vantagem.",pena:20,multa:2000,fianca:5000},
  {numero:65,nome:"Assédio",descricao:"Conduta abusiva.",pena:20,multa:1500,fianca:3000}
];

/* ================= PESQUISA ================= */
document.getElementById("searchButton").onclick = () => {
  const termo = normalizarTexto(document.getElementById("searchInput").value);
  const c = document.getElementById("artigosContainer");
  c.innerHTML = "";
  c.style.display = "block";

  artigos.filter(a =>
    normalizarTexto(a.nome).includes(termo) ||
    a.numero.toString() === termo
  ).forEach(a => {
    c.innerHTML += `
      <div class="article">
        <strong>Art. ${a.numero} – ${a.nome}</strong>
        <p>${a.descricao}</p>
        <p>Pena: ${a.pena} meses | Multa: R$ ${a.multa} | Fiança: ${a.fianca === 0 ? "INAFIANÇÁVEL" : "R$ " + a.fianca}</p>
        <label>
          <input type="checkbox" class="artigo"
            data-numero="${a.numero}"
            data-pena="${a.pena}"
            data-multa="${a.multa}"
            data-fianca="${a.fianca}">
          Selecionar
        </label>
      </div>
    `;
  });
};

/* ================= CÁLCULO ================= */
function calcular() {
  let pena=0,multa=0,fianca=0,perc=0,honorarios=0,arts=[];

  document.querySelectorAll(".artigo:checked").forEach(a=>{
    pena+=+a.dataset.pena;
    multa+=+a.dataset.multa;
    fianca+=+a.dataset.fianca;
    arts.push(a.dataset.numero);
  });

  document.querySelectorAll(".atenuante:checked").forEach(a=>perc+=+a.dataset.percent);
  if(perc>0.4) perc=0.4;

  document.querySelectorAll(".honorario:checked").forEach(h=>honorarios+=+h.dataset.valor);

  const red=Math.round(pena*perc);
  const penaFinal=pena-red;
  const total=multa+honorarios;

  document.getElementById("resultado").innerHTML=`
    <strong>Artigos Selecionados:</strong> ${arts.join(", ") || "Nenhum"}<br><br>
    Pena Base: ${pena} meses<br>
    Atenuantes: ${perc*100}%<br>
    Redução: ${red} meses<br>
    <strong>Pena Final:</strong> ${penaFinal} meses<br><br>
    Multa: R$ ${multa}<br>
    Honorários: R$ ${honorarios}<br><br>
    <strong>Total com Honorários:</strong> R$ ${total}
  `;
}

/* ================= LIMPAR ================= */
function limparCalculo(){
  document.querySelectorAll("input[type=checkbox]").forEach(c=>c.checked=false);
  document.getElementById("resultado").innerHTML="";
  document.getElementById("artigosContainer").innerHTML="";
  document.getElementById("artigosContainer").style.display="none";
  document.getElementById("searchInput").value="";
}
