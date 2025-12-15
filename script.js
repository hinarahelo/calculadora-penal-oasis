// ===============================
// ARTIGOS (1–65)
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

const artigosContainer = document.getElementById("artigosContainer");

// ===============================
// PESQUISA
// ===============================
document.getElementById("searchButton").addEventListener("click", () => {
  const termo = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!termo) {
    artigosContainer.innerHTML = "<em>Digite um artigo para pesquisar.</em>";
    return;
  }

  const encontrados = artigos.filter(a =>
    a.numero.toString() === termo ||
    a.nome.toLowerCase().includes(termo)
  );

  renderArtigos(encontrados);
});

function renderArtigos(lista) {
  artigosContainer.innerHTML = "";

  if (lista.length === 0) {
    artigosContainer.innerHTML = "<strong>Nenhum artigo encontrado.</strong>";
    return;
  }

  lista.forEach(a => {
    artigosContainer.innerHTML += `
      <div class="article">
        <strong>Art. ${a.numero} – ${a.nome}</strong>
        <p>
          Pena: ${a.pena} meses<br>
          Multa: R$ ${a.multa}<br>
          Fiança: R$ ${a.fianca}
        </p>
        <label>
          <input type="checkbox" class="artigo"
            data-pena="${a.pena}"
            data-multa="${a.multa}"
            data-fianca="${a.fianca}">
          Selecionar artigo
        </label>
      </div>
    `;
  });
}

// ===============================
// ATENUANTES (EXPLICAÇÃO)
// ===============================
document.querySelectorAll(".atenuante input").forEach(el => {
  el.addEventListener("change", atualizarDescricao);
});

function atualizarDescricao() {
  const box = document.getElementById("descricaoAtenuante");
  box.innerHTML = "";

  document.querySelectorAll(".atenuante input:checked").forEach(a => {
    box.innerHTML += `• ${a.dataset.desc}<br>`;
  });

  if (box.innerHTML === "") {
    box.innerHTML = "Nenhuma atenuante aplicada.";
  }
}

// ===============================
// CÁLCULO FINAL
// ===============================
function calcular() {
  let pena = 0, multa = 0, fianca = 0;

  document.querySelectorAll(".artigo:checked").forEach(a => {
    pena += Number(a.dataset.pena);
    multa += Number(a.dataset.multa);
    fianca += Number(a.dataset.fianca);
  });

  let percentualTotal = 0;
  document.querySelectorAll(".atenuante input:checked").forEach(a => {
    percentualTotal += Number(a.value);
  });

  if (percentualTotal > 0.5) percentualTotal = 0.5; // trava 50%

  const reducao = pena * percentualTotal;
  const final = pena - reducao;

  document.getElementById("resultado").innerHTML = `
    Pena Base: <strong>${pena} meses</strong><br>
    Atenuantes: <strong>${Math.round(percentualTotal * 100)}%</strong><br>
    Redução: <strong>${Math.round(reducao)} meses</strong><br>
    <hr>
    Pena Final: <strong>${Math.round(final)} meses</strong><br>
    Multa Total: <strong>R$ ${multa.toLocaleString()}</strong><br>
    Fiança Total: <strong>R$ ${fianca.toLocaleString()}</strong>
  `;
}
