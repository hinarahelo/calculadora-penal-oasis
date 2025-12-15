// ===============================
// BASE DE ARTIGOS
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
const atenuantesBox = document.getElementById("atenuantesBox");
const btnCalcular = document.getElementById("btnCalcular");

// ===============================
// PESQUISA
// ===============================
document.getElementById("searchButton").addEventListener("click", () => {
  const termo = document.getElementById("searchInput").value.trim().toLowerCase();

  artigosContainer.style.display = "none";
  atenuantesBox.style.display = "none";
  btnCalcular.style.display = "none";

  if (!termo) return;

  const encontrados = artigos.filter(a =>
    a.numero.toString() === termo ||
    a.nome.toLowerCase().includes(termo)
  );

  renderArtigos(encontrados);
});

// ===============================
// RENDERIZA ARTIGOS (SÓ APÓS BUSCA)
// ===============================
function renderArtigos(lista) {
  artigosContainer.innerHTML = "";

  if (lista.length === 0) {
    artigosContainer.innerHTML = "<strong>Nenhum artigo encontrado.</strong>";
    artigosContainer.style.display = "block";
    return;
  }

  lista.forEach(a => {
    artigosContainer.innerHTML += `
      <div class="article">
        <strong>Art. ${a.numero} – ${a.nome}</strong>
        <p>
          Pena base: ${a.pena} meses<br>
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

  artigosContainer.style.display = "block";
  atenuantesBox.style.display = "block";
  btnCalcular.style.display = "block";

  ativarAtenuantes();
}

// ===============================
// ATENUANTES (FUNCIONAIS)
// ===============================
function ativarAtenuantes() {
  document.querySelectorAll(".atenuanteCheck").forEach(el => {
    el.addEventListener("change", atualizarDescricaoAtenuantes);
  });
}

function atualizarDescricaoAtenuantes() {
  const box = document.getElementById("descricaoAtenuantes");
  box.innerHTML = "";

  document.querySelectorAll(".atenuanteCheck:checked").forEach(a => {
    box.innerHTML += `• ${a.dataset.desc}<br>`;
  });

  if (box.innerHTML === "") {
    box.innerHTML = "Nenhuma atenuante selecionada.";
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

  let percentual = 0;
  document.querySelectorAll(".atenuanteCheck:checked").forEach(a => {
    percentual += Number(a.value);
  });

  if (percentual > 0.5) percentual = 0.5; // limite legal

  const reducao = pena * percentual;
  const penaFinal = pena - reducao;

  document.getElementById("resultado").innerHTML = `
    Pena Base: <strong>${pena} meses</strong><br>
    Atenuantes Aplicadas: <strong>${Math.round(percentual * 100)}%</strong><br>
    Redução: <strong>${Math.round(reducao)} meses</strong><br>
    <hr>
    Pena Final: <strong>${Math.round(penaFinal)} meses</strong><br>
    Multa Total: <strong>R$ ${multa.toLocaleString()}</strong><br>
    Fiança Total: <strong>R$ ${fianca.toLocaleString()}</strong>
  `;
}
