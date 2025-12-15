// ===============================
// ARTIGOS (1 A 65)
// ===============================
const artigos = [];

for (let i = 1; i <= 65; i++) {
    artigos.push({
        numero: i,
        nome: `Artigo ${i}`,
        categoria: "Código Penal",
        pena: 12,
        multa: 500,
        fianca: 1000
    });
}

// ===============================
// NÃO RENDERIZA AO INICIAR
// ===============================
const artigosContainer = document.getElementById("artigosContainer");
artigosContainer.innerHTML = "<p><em>Utilize a pesquisa para localizar um artigo.</em></p>";

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
        const artigoDiv = document.createElement("div");
        artigoDiv.className = "article";

        artigoDiv.innerHTML = `
            <strong>Art. ${art.numero} – ${art.nome}</strong>
            <p>Pena base: ${art.pena} meses<br>
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

        artigosContainer.appendChild(artigoDiv);
    });
}

// ===============================
// PESQUISA (NÚMERO OU NOME)
// ===============================
function pesquisarArtigos() {
    const termo = document.getElementById("searchInput").value.trim().toLowerCase();

    if (!termo) {
        artigosContainer.innerHTML = "<p><em>Digite o número ou nome do artigo.</em></p>";
        return;
    }

    const filtrados = artigos.filter(art =>
        art.numero.toString() === termo ||
        art.nome.toLowerCase().includes(termo)
    );

    renderArtigos(filtrados);
}

// ===============================
// ATENUANTES (COM EXPLICAÇÃO)
// ===============================
function atualizarDescricaoAtenuante() {
    const tipo = document.getElementById("atenuante").value;
    const desc = document.getElementById("descricaoAtenuante");

    if (!tipo) {
        desc.innerHTML = "Nenhuma atenuante aplicada.";
        return;
    }

    if (tipo === "leve") {
        desc.innerHTML = "Atenuante Leve: reduz a pena total em <strong>10%</strong>.";
    }

    if (tipo === "media") {
        desc.innerHTML = "Atenuante Média: reduz a pena total em <strong>20%</strong>.";
    }

    if (tipo === "grave") {
        desc.innerHTML = "Atenuante Grave: reduz a pena total em <strong>30%</strong>.";
    }
}

// ===============================
// CÁLCULO
// ===============================
function calcular() {
    let totalPena = 0;
    let totalMulta = 0;
    let totalFianca = 0;

    document.querySelectorAll(".select-artigo:checked").forEach(item => {
        totalPena += Number(item.dataset.pena);
        totalMulta += Number(item.dataset.multa);
        totalFianca += Number(item.dataset.fianca);
    });

    const atenuante = document.getElementById("atenuante").value;
    let percentual = 0;

    if (atenuante === "leve") percentual = 0.10;
    if (atenuante === "media") percentual = 0.20;
    if (atenuante === "grave") percentual = 0.30;

    const reducao = totalPena * percentual;
    const penaFinal = totalPena - reducao;

    document.getElementById("resultado").innerHTML = `
        Pena Base: <strong>${totalPena} meses</strong><br>
        Redução aplicada: <strong>${Math.round(reducao)} meses</strong><br>
        <hr>
        Pena Final: <strong>${Math.round(penaFinal)} meses</strong><br>
        Multa Total: <strong>R$ ${totalMulta.toLocaleString()}</strong><br>
        Fiança Total: <strong>R$ ${totalFianca.toLocaleString()}</strong>
    `;
}

// ===============================
// EVENTOS
// ===============================
document.getElementById("searchButton").addEventListener("click", pesquisarArtigos);
document.getElementById("atenuante").addEventListener("change", atualizarDescricaoAtenuante);
