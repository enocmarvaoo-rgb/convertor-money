

const conversionFactor = document.querySelector("#convertor");
const input = document.querySelector(".valor input");
const icone = document.querySelector("#icone");
const buton = document.querySelector(".buton");
const nomeMoney = document.querySelector("#name2-money");
const valueMoney = document.querySelector("#value-money");
const value2Money = document.querySelector("#value2-money");

function convertValues() {
    const valor = input.value.replace(",", "."); // garante ponto decimal

    if (conversionFactor.value === "USD") {
        const todayDolar = 5.45;
        value2Money.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valor / todayDolar);
    }

    if (conversionFactor.value === "EUR") {
        const todayEuro = 6.34;
        value2Money.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(valor / todayEuro);
    }

    if (conversionFactor.value === "GBP") {
        const todayLibra = 7.31;
        value2Money.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP",
        }).format(valor / todayLibra);
    }

    if (conversionFactor.value === "BTC") {
        const todayBIT = 604733;
        value2Money.innerHTML = `₿ ${new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 4,
            maximumFractionDigits: 8,
        }).format(valor / todayBIT)}`;
    }


    valueMoney.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valor);
}

function changeCurrency() {
    if (conversionFactor.value === "USD") {
        nomeMoney.innerHTML = "Dólar Americano";
        icone.src = "assets/estados-unidos (1) 1.png";
    }

    if (conversionFactor.value === "EUR") {
        nomeMoney.innerHTML = "Euro";
        icone.src = "assets/Design sem nome 3.png";
    }

    if (conversionFactor.value === "GBP") {
        nomeMoney.innerHTML = "Libra Esterlina";
        icone.src = "assets/libra 1.png";
    }

    if (conversionFactor.value === "BTC") {
        nomeMoney.innerHTML = "Bitcoin";
        icone.src = "assets/bitcoin 1.png";
    }

    convertValues();
}

conversionFactor.addEventListener("change", changeCurrency);
buton.addEventListener("click", convertValues);

input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9.,]/g, '');
});


