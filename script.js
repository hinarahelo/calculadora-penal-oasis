// =======================================================
// CÓDIGO PENAL OASIS — ARTIGOS 1 AO 65 (OFICIAL)
// =======================================================

const artigos = [
{numero:1,nome:"Direção Perigosa",descricao:"Utilização do veículo para demonstrar manobras perigosas colocando terceiros em risco.",pena:15,multa:2000,fianca:1500},
{numero:2,nome:"Homicídio Culposo",descricao:"Morte causada por imprudência, negligência ou imperícia, sem intenção de matar.",pena:30,multa:6000,fianca:0},
{numero:3,nome:"Homicídio Doloso",descricao:"Matar alguém intencionalmente.",pena:40,multa:12000,fianca:0},
{numero:4,nome:"Furto",descricao:"Subtração de bem alheio sem violência ou ameaça.",pena:30,multa:4000,fianca:8500},
{numero:5,nome:"Roubo",descricao:"Subtração de bem mediante violência ou grave ameaça.",pena:30,multa:3500,fianca:8500},
{numero:6,nome:"Latrocínio",descricao:"Roubo seguido de morte.",pena:45,multa:8000,fianca:0},
{numero:7,nome:"Agressão ou Lesão Corporal",descricao:"Ato intencional de causar dano físico ou psicológico.",pena:20,multa:4000,fianca:7000},
{numero:8,nome:"Genocídio",descricao:"Atos com objetivo de destruir grupo nacional, étnico, racial ou religioso.",pena:70,multa:7000,fianca:0},
{numero:9,nome:"Terrorismo",descricao:"Atos criminosos para provocar terror social ou generalizado.",pena:70,multa:10000,fianca:15000},
{numero:10,nome:"Sequestro",descricao:"Privar alguém de sua liberdade para obter vantagem.",pena:50,multa:5000,fianca:0},
{numero:11,nome:"Cárcere Privado",descricao:"Restringir a liberdade de alguém contra sua vontade.",pena:35,multa:3000,fianca:6000},
{numero:12,nome:"Omissão de Socorro",descricao:"Deixar de prestar assistência a quem está em perigo.",pena:30,multa:8000,fianca:3000},
{numero:13,nome:"Maus Tratos",descricao:"Expor pessoa sob responsabilidade a perigo grave.",pena:40,multa:5000,fianca:0},
{numero:14,nome:"Difamação",descricao:"Atribuir fato ofensivo à reputação de alguém.",pena:30,multa:2500,fianca:8500},
{numero:15,nome:"Injúria",descricao:"Ofender a dignidade ou honra de alguém.",pena:20,multa:2500,fianca:8500},
{numero:16,nome:"Calúnia",descricao:"Acusar falsamente alguém de crime.",pena:20,multa:2500,fianca:8500},
{numero:17,nome:"Atentado Violento ao Pudor",descricao:"Constranger alguém a ato libidinoso mediante violência.",pena:250,multa:0,fianca:0},
{numero:18,nome:"Ameaça",descricao:"Prometer causar mal físico, moral ou patrimonial.",pena:30,multa:2000,fianca:10000},
{numero:19,nome:"Uso Indevido de Imagem",descricao:"Utilizar imagem de alguém sem autorização.",pena:0,multa:3500,fianca:7000},
{numero:20,nome:"Abandono de Incapaz",descricao:"Abandonar pessoa incapaz em situação de risco.",pena:30,multa:8000,fianca:7000},
{numero:21,nome:"Incitar a Prática de Crime",descricao:"Incentivar publicamente a prática de crime.",pena:25,multa:6250,fianca:3000},
{numero:22,nome:"Formação de Quadrilha",descricao:"Associação de quatro ou mais pessoas para crimes.",pena:45,multa:5000,fianca:7000},
{numero:23,nome:"Tráfico de Drogas",descricao:"Comercialização ou posse acima de cinco unidades.",pena:50,multa:2500,fianca:1000},
{numero:24,nome:"Porte Ilegal de Arma",descricao:"Portar arma ou munição sem autorização.",pena:50,multa:7500,fianca:12000},
{numero:25,nome:"Uso Indevido do Porte de Armas",descricao:"Uso do armamento para fins ilegais.",pena:40,multa:2000,fianca:2000},
{numero:26,nome:"Tráfico de Material Ilegal",descricao:"Distribuição de bens proibidos por lei.",pena:25,multa:4000,fianca:8750},
{numero:27,nome:"Tráfico Ilegal de Armas",descricao:"Fornecimento de armas ou munições ilegalmente.",pena:60,multa:9500,fianca:10000},
{numero:28,nome:"Fuga de Abordagem",descricao:"Evitar contato com autoridade após crime.",pena:20,multa:1500,fianca:2500},
{numero:30,nome:"Perturbação da Ordem Pública",descricao:"Alterar a ordem e disciplina pública.",pena:15,multa:1500,fianca:2500},
{numero:31,nome:"Porte de Dinheiro Sujo",descricao:"Portar dinheiro proveniente de crime.",pena:15,multa:1500,fianca:2000},
{numero:32,nome:"Uso de Vestimenta de Servidor Público",descricao:"Uso indevido de vestimenta oficial.",pena:15,multa:1500,fianca:1700},
{numero:33,nome:"Falsidade Ideológica",descricao:"Alterar conteúdo de documento para benefício.",pena:25,multa:2250,fianca:3125},
{numero:34,nome:"Desacato à Autoridade",descricao:"Faltar com respeito a agente público.",pena:25,multa:4000,fianca:4000},
{numero:35,nome:"Abandono de Função",descricao:"Servidor deixa de cumprir suas funções.",pena:25,multa:4000,fianca:2500},
{numero:36,nome:"Desobediência de Ordem Legal",descricao:"Não cumprir ordem legal de autoridade.",pena:25,multa:5000,fianca:5000},
{numero:37,nome:"Tentativa de Suborno",descricao:"Oferecer vantagem indevida.",pena:40,multa:4000,fianca:8750},
{numero:38,nome:"Abuso de Autoridade",descricao:"Uso indevido de poder por agente público.",pena:25,multa:4000,fianca:2500},
{numero:39,nome:"Fraudar Informações",descricao:"Manipular dados para obter vantagem.",pena:20,multa:3000,fianca:2000},
{numero:40,nome:"Corrida Ilegal",descricao:"Corridas visando lucro ilícito.",pena:30,multa:5000,fianca:2250},
{numero:41,nome:"Invasão aos Órgãos Públicos",descricao:"Invadir repartição pública.",pena:20,multa:3000,fianca:2000},
{numero:42,nome:"Invasão de Domicílio",descricao:"Entrar em casa alheia sem consentimento.",pena:20,multa:3500,fianca:2500},
{numero:43,nome:"Veículo Danificado",descricao:"Veículo avariado em via pública.",pena:0,multa:5000,fianca:0},
{numero:44,nome:"Legítima Defesa",descricao:"Exclusão de ilicitude.",pena:0,multa:0,fianca:0},
{numero:45,nome:"Resistência à Prisão",descricao:"Opor-se à prisão com violência.",pena:20,multa:2500,fianca:7000},
{numero:46,nome:"Perturbação do Sossego Público",descricao:"Perturbar lazer em local público.",pena:0,multa:7500,fianca:0},
{numero:47,nome:"Prevaricação",descricao:"Servidor age por interesse pessoal.",pena:30,multa:4000,fianca:2000},
{numero:48,nome:"Desmanche de Veículo",descricao:"Levar veículo para desmanche ilegal.",pena:30,multa:2000,fianca:4500},
{numero:49,nome:"Ocultação de Provas",descricao:"Destruir ou ocultar provas.",pena:20,multa:1500,fianca:3000},
{numero:50,nome:"Descaminho",descricao:"Evitar pagamento de impostos.",pena:40,multa:20000,fianca:8500},
{numero:51,nome:"Peculato",descricao:"Servidor se apropria de bens públicos.",pena:20,multa:2000,fianca:3000},
{numero:52,nome:"Vadiagem",descricao:"Ociosidade habitual sem renda lícita.",pena:15,multa:1000,fianca:2000},
{numero:53,nome:"Vandalismo",descricao:"Destruição de bens públicos ou privados.",pena:25,multa:2500,fianca:3000},
{numero:54,nome:"Perjúrio",descricao:"Mentir sob juramento.",pena:20,multa:1500,fianca:2500},
{numero:55,nome:"Cúmplice",descricao:"Auxiliar ou colaborar com crime.",pena:20,multa:2000,fianca:4300},
{numero:56,nome:"Apologia ao Crime",descricao:"Elogiar ou justificar crime publicamente.",pena:15,multa:1500,fianca:2500},
{numero:57,nome:"Tráfico de Influência",descricao:"Usar posição para vantagem ilícita.",pena:20,multa:3000,fianca:4500},
{numero:58,nome:"Obstrução de Justiça",descricao:"Embaraçar investigação ou processo.",pena:20,multa:3000,fianca:4500},
{numero:59,nome:"Associação Criminosa",descricao:"Grupo organizado para crimes.",pena:30,multa:2500,fianca:4000},
{numero:60,nome:"Associação ao Tráfico",descricao:"União para crimes de tráfico.",pena:30,multa:2500,fianca:4000},
{numero:61,nome:"Receptação de Veículos",descricao:"Adquirir veículo produto de crime.",pena:25,multa:1500,fianca:2500},
{numero:62,nome:"Tentativa de Furto",descricao:"Início de furto não consumado.",pena:20,multa:1500,fianca:5000},
{numero:63,nome:"Tentativa de Roubo",descricao:"Início de roubo não consumado.",pena:20,multa:1500,fianca:5000},
{numero:64,nome:"Extorsão",descricao:"Forçar vantagem por ameaça.",pena:20,multa:2000,fianca:5000},
{numero:65,nome:"Assédio",descricao:"Conduta abusiva repetitiva.",pena:20,multa:1500,fianca:3000}
];

// =======================================================
// PESQUISA, SELEÇÃO E CÁLCULO
// =======================================================

const artigosContainer = document.getElementById("artigosContainer");

document.getElementById("searchButton").onclick = () => {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "block";

  artigos.filter(a =>
    a.numero.toString() === termo || a.nome.toLowerCase().includes(termo)
  ).forEach(a => {
    artigosContainer.innerHTML += `
      <div class="article">
        <strong>Art. ${a.numero} – ${a.nome}</strong>
        <p>${a.descricao}</p>
        <p>Pena: ${a.pena} meses | Multa: R$ ${a.multa} | Fiança: ${a.fianca || "Inafiançável"}</p>
        <label><input type="checkbox" class="artigo"
          data-pena="${a.pena}" data-multa="${a.multa}" data-fianca="${a.fianca}"> Selecionar</label>
      </div>
    `;
  });
};

function calcular() {
  let pena=0,multa=0,fianca=0;
  document.querySelectorAll(".artigo:checked").forEach(a=>{
    pena+=+a.dataset.pena;
    multa+=+a.dataset.multa;
    fianca+=+a.dataset.fianca;
  });

  let perc=0;
  document.querySelectorAll(".atenuante:checked").forEach(a=>perc+=+a.value);
  if(perc>0.4) perc=0.4;

  const red=Math.round(pena*perc);
  document.getElementById("resultado").innerHTML=
  `Atenuantes: ${perc*100}%<br>Redução: ${red} meses<br>Pena Final: ${pena-red} meses<br>Multa: R$ ${multa}<br>Fiança: R$ ${fianca}`;
}
