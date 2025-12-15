const artigos = [
{numero:1,nome:"Direção Perigosa",descricao:"Manobras perigosas.",pena:15,multa:2000,fianca:1500},
{numero:2,nome:"Homicídio Culposo",descricao:"Morte sem intenção.",pena:30,multa:6000,fianca:null},
{numero:3,nome:"Homicídio Doloso",descricao:"Matar intencionalmente.",pena:40,multa:12000,fianca:null},
{numero:4,nome:"Furto",descricao:"Subtração sem violência.",pena:30,multa:4000,fianca:8500},
{numero:5,nome:"Roubo",descricao:"Subtração com violência.",pena:30,multa:3500,fianca:8500},
{numero:6,nome:"Latrocínio",descricao:"Roubo seguido de morte.",pena:45,multa:8000,fianca:null},
{numero:7,nome:"Lesão Corporal",descricao:"Agressão.",pena:20,multa:4000,fianca:7000},
{numero:8,nome:"Genocídio",descricao:"Crime contra grupo.",pena:70,multa:7000,fianca:null},
{numero:9,nome:"Terrorismo",descricao:"Ato terrorista.",pena:70,multa:10000,fianca:null},
{numero:10,nome:"Sequestro",descricao:"Privar liberdade.",pena:50,multa:5000,fianca:null},
{numero:11,nome:"Cárcere Privado",descricao:"Restrição de liberdade.",pena:35,multa:3000,fianca:6000},
{numero:12,nome:"Omissão de Socorro",descricao:"Não prestar ajuda.",pena:30,multa:8000,fianca:3000},
{numero:13,nome:"Maus Tratos",descricao:"Expor a perigo.",pena:40,multa:5000,fianca:null},
{numero:14,nome:"Difamação",descricao:"Ofensa à reputação.",pena:30,multa:2500,fianca:8500},
{numero:15,nome:"Injúria",descricao:"Ofensa à honra.",pena:20,multa:2500,fianca:8500},
{numero:16,nome:"Calúnia",descricao:"Acusação falsa.",pena:20,multa:2500,fianca:8500},
{numero:17,nome:"Atentado Violento ao Pudor",descricao:"Crime sexual.",pena:250,multa:0,fianca:null},
{numero:18,nome:"Ameaça",descricao:"Prometer mal.",pena:30,multa:2000,fianca:10000},
{numero:19,nome:"Uso Indevido de Imagem",descricao:"Uso sem autorização.",pena:0,multa:3500,fianca:7000},
{numero:20,nome:"Abandono de Incapaz",descricao:"Abandono.",pena:30,multa:8000,fianca:7000},
{numero:21,nome:"Incitar Crime",descricao:"Incentivar crime.",pena:25,multa:6250,fianca:3000},
{numero:22,nome:"Formação de Quadrilha",descricao:"Associação criminosa.",pena:45,multa:5000,fianca:7000},
{numero:23,nome:"Tráfico de Drogas",descricao:"Venda de drogas.",pena:50,multa:2500,fianca:1000},
{numero:24,nome:"Porte Ilegal de Arma",descricao:"Portar arma ilegal.",pena:50,multa:7500,fianca:12000},
{numero:25,nome:"Uso Indevido do Porte",descricao:"Uso ilegal de arma.",pena:40,multa:2000,fianca:2000},
{numero:26,nome:"Tráfico Material Ilegal",descricao:"Bens proibidos.",pena:25,multa:4000,fianca:8750},
{numero:27,nome:"Tráfico de Armas",descricao:"Venda de armas.",pena:60,multa:9500,fianca:10000},
{numero:28,nome:"Fuga de Abordagem",descricao:"Evitar autoridade.",pena:20,multa:1500,fianca:2500},
{numero:30,nome:"Perturbação da Ordem",descricao:"Desordem pública.",pena:15,multa:1500,fianca:2500},
{numero:31,nome:"Dinheiro Sujo",descricao:"Dinheiro ilícito.",pena:15,multa:1500,fianca:2000},
{numero:32,nome:"Uso Vestimenta Pública",descricao:"Uso indevido.",pena:15,multa:1500,fianca:1700},
{numero:33,nome:"Falsidade Ideológica",descricao:"Documento falso.",pena:25,multa:2250,fianca:3125},
{numero:34,nome:"Desacato",descricao:"Desrespeito.",pena:25,multa:4000,fianca:4000},
{numero:35,nome:"Abandono de Função",descricao:"Servidor ausente.",pena:25,multa:4000,fianca:2500},
{numero:36,nome:"Desobediência",descricao:"Não cumprir ordem.",pena:25,multa:5000,fianca:5000},
{numero:37,nome:"Tentativa de Suborno",descricao:"Oferecer vantagem.",pena:40,multa:4000,fianca:8750},
{numero:38,nome:"Abuso de Autoridade",descricao:"Uso indevido.",pena:25,multa:4000,fianca:2500},
{numero:39,nome:"Fraude",descricao:"Manipular dados.",pena:20,multa:3000,fianca:2000},
{numero:40,nome:"Corrida Ilegal",descricao:"Corrida criminosa.",pena:30,multa:5000,fianca:2250},
{numero:41,nome:"Invasão Órgãos Públicos",descricao:"Invadir repartição.",pena:20,multa:3000,fianca:2000},
{numero:42,nome:"Invasão de Domicílio",descricao:"Entrar sem permissão.",pena:20,multa:3500,fianca:2500},
{numero:43,nome:"Veículo Danificado",descricao:"Veículo avariado.",pena:0,multa:5000,fianca:null},
{numero:44,nome:"Legítima Defesa",descricao:"Exclusão de crime.",pena:0,multa:0,fianca:null},
{numero:45,nome:"Resistência à Prisão",descricao:"Opor-se à prisão.",pena:20,multa:2500,fianca:7000},
{numero:46,nome:"Perturbação do Sossego",descricao:"Barulho público.",pena:0,multa:7500,fianca:null},
{numero:47,nome:"Prevaricação",descricao:"Interesse pessoal.",pena:30,multa:4000,fianca:2000},
{numero:48,nome:"Desmanche",descricao:"Desmanche ilegal.",pena:30,multa:2000,fianca:4500},
{numero:49,nome:"Ocultação de Provas",descricao:"Destruir provas.",pena:20,multa:1500,fianca:3000},
{numero:50,nome:"Descaminho",descricao:"Sonegação.",pena:40,multa:20000,fianca:8500},
{numero:51,nome:"Peculato",descricao:"Apropriação.",pena:20,multa:2000,fianca:3000},
{numero:52,nome:"Vadiagem",descricao:"Ociosidade.",pena:15,multa:1000,fianca:2000},
{numero:53,nome:"Vandalismo",descricao:"Destruição.",pena:25,multa:2500,fianca:3000},
{numero:54,nome:"Perjúrio",descricao:"Mentir sob juramento.",pena:20,multa:1500,fianca:2500},
{numero:55,nome:"Cúmplice",descricao:"Ajudar crime.",pena:20,multa:2000,fianca:4300},
{numero:56,nome:"Apologia ao Crime",descricao:"Elogiar crime.",pena:15,multa:1500,fianca:2500},
{numero:57,nome:"Tráfico de Influência",descricao:"Usar cargo.",pena:20,multa:3000,fianca:4500},
{numero:58,nome:"Obstrução de Justiça",descricao:"Atrapalhar processo.",pena:20,multa:3000,fianca:4500},
{numero:59,nome:"Associação Criminosa",descricao:"Grupo criminoso.",pena:30,multa:2500,fianca:4000},
{numero:60,nome:"Associação ao Tráfico",descricao:"União criminosa.",pena:30,multa:2500,fianca:4000},
{numero:61,nome:"Receptação",descricao:"Veículo roubado.",pena:25,multa:1500,fianca:2500},
{numero:62,nome:"Tentativa de Furto",descricao:"Furto não consumado.",pena:20,multa:1500,fianca:5000},
{numero:63,nome:"Tentativa de Roubo",descricao:"Roubo não consumado.",pena:20,multa:1500,fianca:5000},
{numero:64,nome:"Extorsão",descricao:"Forçar vantagem.",pena:20,multa:2000,fianca:5000},
{numero:65,nome:"Assédio",descricao:"Conduta abusiva.",pena:20,multa:1500,fianca:3000}
];

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
        <p>Pena: ${a.pena} meses | Multa: R$ ${a.multa} | Fiança: ${a.fianca === null ? "Inafiançável" : "R$ " + a.fianca}</p>
        <label>
          <input type="checkbox" class="artigo"
            data-numero="${a.numero}"
            data-nome="${a.nome}"
            data-pena="${a.pena}"
            data-multa="${a.multa}"
            data-fianca="${a.fianca}">
          Selecionar
        </label>
      </div>`;
  });
};

function calcular() {
  let pena = 0, multa = 0, fiancaTotal = 0;
  let inafiancavel = false;
  let artigosSelecionados = [];

  document.querySelectorAll(".artigo:checked").forEach(a => {
    pena += Number(a.dataset.pena);
    multa += Number(a.dataset.multa);

    artigosSelecionados.push(
      `Art. ${a.dataset.numero} – ${a.dataset.nome}`
    );

    if (a.dataset.fianca === "null") inafiancavel = true;
    else fiancaTotal += Number(a.dataset.fianca);
  });

  let perc = 0;
  let desc = [];

  document.querySelectorAll(".atenuante:checked").forEach(a => {
    perc += Number(a.dataset.percent);
    desc.push(a.dataset.desc);
  });

  if (perc > 0.4) perc = 0.4;

  const reducao = Math.round(pena * perc);

  document.getElementById("descricaoAtenuantes").innerHTML =
    desc.length ? desc.join("<br>") : "Nenhuma atenuante selecionada.";

  document.getElementById("resultado").innerHTML = `
    <strong>Artigos Aplicados:</strong><br>
    ${artigosSelecionados.length ? artigosSelecionados.join("<br>") : "Nenhum artigo selecionado."}
    <hr>
    Atenuantes: ${perc * 100}%<br>
    Redução: ${reducao} meses<br>
    Pena Final: ${pena - reducao} meses<br>
    Multa: R$ ${multa.toLocaleString("pt-BR")}<br>
    Fiança: ${inafiancavel ? "Inafiançável" : "R$ " + fiancaTotal.toLocaleString("pt-BR")}
  `;
}

function limpar() {
  document.getElementById("searchInput").value = "";
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("descricaoAtenuantes").innerText = "Nenhuma atenuante selecionada.";
  document.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = false);
}
