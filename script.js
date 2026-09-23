const menu = {
  primi: [
    ["Risotto al missoltino", "Burro affumicato, limone, prezzemolo", "€18"],
    ["Tagliolino al ragù bianco", "Coniglio, timo, fondo arrosto", "€19"],
    ["Gnocchi di zucca", "Taleggio, nocciole, salvia", "€17"],
    ["Raviolo del lago", "Ricotta, erbe fini, brodo di pesce", "€20"],
    ["Zuppa di stagione", "Verdure dell'orto, crostini, olio al rosmarino", "€15"]
  ],
  secondi: [
    ["Trota alla brace", "Cavolo, patata fondente, salsa verde", "€25"],
    ["Guancia di manzo", "Polenta rossa, cipolla in agrodolce", "€27"],
    ["Gallina ruspante", "Sedano rapa, mostarda di pere", "€24"],
    ["Orto d'inverno", "Radici, legumi, fondo vegetale", "€21"],
    ["Filetto di manzo", "Patata fondente, spinaci, salsa al vino rosso", "€27"],
    ["Pesce del lago", "Verdure di stagione, limone, erbe aromatiche", "€26"]
  ],
  dolci: [
    ["Tiramisù della casa", "Mascarpone, caffè, cacao", "€15"],
    ["Pera e cioccolato", "Pera cotta, fondente 70%, grappa", "€16"],
    ["Miele e castagna", "Semifreddo, miele locale, rosmarino", "€15"],
    ["Selezione di formaggi", "Lombardi, confettura della casa", "€17"]
  ],
  vini: [
    ["Lugana DOC", "Turbiana · fresco e minerale · bottiglia", "€24"],
    ["Valtellina Superiore DOCG", "Nebbiolo · elegante e speziato · bottiglia", "€26"],
    ["Franciacorta Brut", "Chardonnay e Pinot Nero · metodo classico · bottiglia", "€27"]
  ]
};

const dishes = document.querySelector("#dishes");
const tabs = document.querySelectorAll("[data-category]");

function renderMenu(category) {
  dishes.innerHTML = menu[category].map(([name, details, price]) => `<article class="dish"><h3>${name}</h3><p>${details}</p><strong>${price}</strong></article>`).join("");
}

tabs.forEach((tab) => tab.addEventListener("click", () => {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderMenu(tab.dataset.category);
}));

const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("open", !open);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

const dateInput = document.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split("T")[0];
document.querySelector("#reservation-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  document.querySelector("#form-status").textContent = `Disponibilità trovata per ${data.get("guests")} alle ${data.get("time")}. Richiesta dimostrativa pronta.`;
});

renderMenu("primi");
