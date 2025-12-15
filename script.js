// ===============================
// ARTIGOS (EXEMPLO – ESTRUTURA CORRETA)
// ===============================
const artigos = [
  {
    numero: 1,
    nome: "Furto Simples",
    descricao: "Subtrair coisa alheia móvel sem violência.",
    pena: 12,
    multa: 500,
    fianca: 1000
  },
  {
    numero: 2,
    nome: "Roubo",
    descricao: "Subtrair coisa alheia móvel mediante violência.",
    pena: 24,
    multa: 1500,
    fianca: 3000
  }
  // 👉 aqui entram os 65 artigos reais do seu documento
];

// ===============================
// ELEMENTOS
// ===============================
const artigosContainer = document.getElementById("artigosContainer");

// ===============================
// PESQUISA
// ===============================
document.getElementById("searchButton").addEventListener("click", () => {
  const termo = document.getElementById("searchInput").value.trim().toLowerCase();
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";

  if (!termo) return;

  const encontrados = artigos.filter(a =>
    a.numero.toString() === termo ||
    a.nome.toLowerCase().includes(termo)
  );

  renderArtigos(encontrados);
});

// ===============================
// MOSTRA ARTIGOS
// ===============================
function renderArtigos(lista) {
  if (lista.length === 0) {
    artigosContainer.innerHTML = "<strong>Nenhum artigo encontrado.</strong>";
    artigosContainer.style.display = "block";
    return;
  }

  lista.forEach(a => {
    artigosContainer.innerHTML += `
      <div class="article">
        <strong>Art. ${a.numero} – ${a.nome}</strong>
        <p>${a.descricao}</p>
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

  artigosContainer.style.display = "block";
}

// ===============================
// ATENUANTES (DESCRIÇÃO)
// ===============================
document.querySelectorAll(".atenuante input").forEach(el => {
  el.addEventListener("change", () => {
    const box = document.getElementById("descricaoAtenuantes");
    box.innerHTML = "";

    document.querySelectorAll(".atenuante input:checked").forEach(a => {
      box.innerHTML += `• ${a.dataset.desc}<br>`;
    });

    if (box.innerHTML === "") {
      box.innerHTML = "Nenhuma atenuante selecionada.";
    }
  });
});

// ===============================
// CÁLCULO FINAL
// ===============================
function calcular() {
  let penaBase = 0;
  let multa = 0;
  let fianca = 0;

  document.querySelectorAll(".artigo:checked").forEach(a => {
    penaBase += Number(a.dataset.pena);
    multa += Number(a.dataset.multa);
    fianca += Number(a.dataset.fianca);
  });

  let percentual = 0;
  document.querySelectorAll(".atenuante input:checked").forEach(a => {
    percentual += Number(a.dataset.percent);
  });

  const reducao = Math.round(penaBase * percentual);
  const penaFinal = penaBase - reducao;

  document.getElementById("resultado").innerHTML = `
    Atenuantes: ${Math.round(percentual * 100)}%<br>
    Redução: <strong>${reducao} meses</strong><br>
    Pena Final: <strong>${penaFinal} meses</strong><br>
    Multa: <strong>R$ ${multa.toLocaleString()}</strong><br>
    Fiança: <strong>R$ ${fianca.toLocaleString()}</strong>
  `;
}
