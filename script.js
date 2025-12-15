// ===============================
// DADOS DOS ARTIGOS (EXEMPLO ATÉ 65)
// ===============================
const artigos = [
    { numero: 1, nome: "Furto Simples", categoria: "Crimes Patrimoniais", pena: 12, multa: 500, fianca: 1000 },
    { numero: 2, nome: "Furto Qualificado", categoria: "Crimes Patrimoniais", pena: 24, multa: 1000, fianca: 2000 },
    { numero: 3, nome: "Roubo", categoria: "Crimes Patrimoniais", pena: 36, multa: 1500, fianca: 3000 },
    { numero: 4, nome: "Roubo Qualificado", categoria: "Crimes Patrimoniais", pena: 60, multa: 3000, fianca: 5000 },

    { numero: 5, nome: "Homicídio Simples", categoria: "Crimes Contra a Vida", pena: 120, multa: 0, fianca: 0 },
    { numero: 6, nome: "Homicídio Qualificado", categoria: "Crimes Contra a Vida", pena: 240, multa: 0, fianca: 0 },

    { numero: 7, nome: "Ameaça", categoria: "Crimes Contra a Pessoa", pena: 6, multa: 300, fianca: 500 },
    { numero: 8, nome: "Lesão Corporal", categoria: "Crimes Contra a Pessoa", pena: 18, multa: 800, fianca: 1500 },

    { numero: 9, nome: "Tráfico de Drogas", categoria: "Crimes Contra a Saúde Pública", pena: 180, multa: 5000, fianca: 0 },
    { numero: 10, nome: "Uso de Entorpecentes", categoria: "Crimes Contra a Saúde Pública", pena: 0, multa: 300, fianca: 0 },

    // 🔹 ARTIGOS 11 ATÉ 65 (PADRÃO)
];

for (let i = 11; i <= 65; i++) {
    artigos.push({
        numero: i,
        nome: `Artigo ${i}`,
        categoria: "Outros Crimes",
        pena: 12,
        multa: 500,
        fianca: 1000
    });
}

// ===============================
// RENDERIZAÇÃO DOS ARTIGOS
// ===============================
const artigosContainer = document.getElementById("artigosContainer");

function renderArtigos(lista) {
    artigosContainer.innerHTML = "";

    const categorias = {};

    lista.forEach(art => {
        if (!categorias[art.categoria]) {
            categorias[art.categoria] = [];
        }
        categorias[art.categoria].push(art);
    });

    for (let categoria in categorias) {
        const categoriaDiv = document.createElement("div");
        categoriaDiv.className = "category";

        categoriaDiv.innerHTML = `<h2>${categoria}</h2>`;

        categorias[categoria].forEach(art => {
            const artigoDiv = document.createElement("div");
            artigoDiv.className = "article";

            artigoDiv.innerHTML = `
                <strong>Art. ${art.numero} – ${art.nome}</strong>
                <p>Pena: ${art.pena} meses | Multa: R$ ${art.multa} | Fiança: R$ ${art.fianca}</p>
                <label>
                    <input type="checkbox" class="select-artigo"
                        data-pena="${art.pena}"
                        data-multa="${art.multa}"
                        data-fianca="${art.fianca}">
                    Selecionar artigo
                </label>
            `;

            categoriaDiv.appendChild(artigoDiv);
        });

        artigosContainer.appendChild(categoriaDiv);
    }
}

// ===============================
// PESQUISA (NÚMERO OU NOME)
// ===============================
function pesquisarArtigos() {
    const termo = document.getElementById("searchInput").value.toLowerCase();

    const filtrados = artigos.filter(art =>
        art.nome.toLowerCase().includes(termo) ||
        art.numero.toString() === termo
    );

    renderArtigos(filtrados);
}

// ===============================
// CÁLCULO DA PENA
// ===============================
function calcular() {
    let totalPena = 0;
    let totalMulta = 0;
    let totalFianca = 0;

    document.querySelectorAll(".select-artigo:checked").forEach(item => {
        totalPena += parseInt(item.dataset.pena);
        totalMulta += parseInt(item.dataset.multa);
        totalFianca += parseInt(item.dataset.fianca);
    });

    // Atenuantes
    const atenuante = document.getElementById("atenuante").value;
    if (atenuante === "leve") totalPena *= 0.9;
    if (atenuante === "media") totalPena *= 0.8;
    if (atenuante === "grave") totalPena *= 0.7;

    document.getElementById("resultado").innerHTML = `
        Pena Total: <strong>${Math.round(totalPena)} meses</strong><br>
        Multa Total: <strong>R$ ${totalMulta.toLocaleString()}</strong><br>
        Fiança Total: <strong>R$ ${totalFianca.toLocaleString()}</strong>
    `;
}

// ===============================
// EVENTOS
// ===============================
document.getElementById("searchButton").addEventListener("click", pesquisarArtigos);

// Render inicial
renderArtigos(artigos);
