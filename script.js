// ===============================
// ARTIGOS (1 A 65)
// ===============================
const artigos = [];

for (let i = 1; i <= 65; i++) {
  artigos.push({
    numero: i,
    nome: `Artigo ${i}`,
    pena: 12,
    multa: 500,
    fianca: 1000
  });
}

// ===============================
// ELEMENTOS
// ===============================
const artigosContainer = document.getElementById("artigosContainer");
const searchInput = document.getElementById("searchInput");

// ===============================
// RENDERIZAÇÃO
// ===============================
function renderArtigos(lista) {
  artigosContainer.innerHTML = "";

  if (lista.length === 0) {
    artigosContainer.innerHTML = "<p><strong>Nenhum artigo encontrado.</strong></p>";
    return;
  }

  lista.forEach(art => {
    const div = document.createElement("div");
    div.className = "article";

    div.innerHTML = `
      <strong>Art. ${art.numero} – ${art.nome}</strong>
      <p>
        Pena base: ${art.pena} meses<br>
        Multa: R$ ${art.multa}<br>
        Fiança: R$ ${art.fianca}
      </p>
      <label>
        <input type="checkbox" class="select-artigo"
          data-pena="${art.pena}"
          data-multa="${art.multa}"
          data-fianca="${art.fianca}">
        Selecionar artigo
      </label>
    `;

    artigosContainer.appendChild(div);
  });
}

// ===============================
// PESQUISA
// ===============================
function pesquisarArtigos() {
  const termo = searchInput.value.trim().toLowerCase();

  if (!termo) {
    artigosContainer.innerHTML = "<p><em>Digite o número ou nome do artigo.</em></p>";
    return;
  }

  const filtrados = artigos.filter(a =>
    a.numero.toString() === termo ||
    a.nome.toLowerCase().includes(termo)
  );

  renderArtigos(filtrados);
}

// ===============================
// ATENUANTES (DESCRIÇÃO)
// ===============================
function atualizarDescricaoAtenuante() {
  const tipo = document.getElementById("atenuante").value;
  const desc = document.getElementById("descricaoAtenuante");

  if (tipo === "leve")
    desc.innerHTML = "Atenuante Leve: reduz a pena total em <strong>10%</strong>.";

  else if (tipo === "media")
    desc.innerHTML = "Atenuante Média: reduz a pena total em <strong>20%</strong>.";

  else if (tipo === "grave")
    desc.innerHTML = "Atenuante Grave: reduz a pena total em <strong>30%</strong>.";

  else
    desc.innerHTML = "Nenhuma atenuante aplicada.";
}

// ===============================
// CÁLCULO
// ===============================
function calcular() {
  let pena = 0, multa = 0, fianca = 0;

  document.querySelectorAll(".select-artigo:checked").forEach(el => {
    pena += Number(el.dataset.pena);
    multa += Number(el.dataset.multa);
    fianca += Number(el.dataset.fianca);
  });

  let percentual = 0;
  const atenuante = document.getElementById("atenuante").value;

  if (atenuante === "leve") percentual = 0.10;
  if (atenuante === "media") percentual = 0.20;
  if (atenuante === "grave") percentual = 0.30;

  const reducao = pena * percentual;
  const penaFinal = pena - reducao;

  document.getElementById("resultado").innerHTML = `
    Pena Base: <strong>${pena} meses</strong><br>
    Redução: <strong>${Math.round(reducao)} meses</strong><br>
    <hr>
    Pena Final: <strong>${Math.round(penaFinal)} meses</strong><br>
    Multa Total: <strong>R$ ${multa.toLocaleString()}</strong><br>
    Fiança Total: <strong>R$ ${fianca.toLocaleString()}</strong>
  `;
}

// ===============================
// EVENTOS
// ===============================
document.getElementById("searchButton").addEventListener("click", pesquisarArtigos);
document.getElementById("atenuante").addEventListener("change", atualizarDescricaoAtenuante);
