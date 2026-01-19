# React Quiz App

Jednoducha a moderni kvizova aplikace postavena na knihovne React. Aplikace obsahuje uvodni obrazovku, casovy limit pro kazdou otazku a zaverecne vyhodnoceni skore. Design je laden do minimalistickeho stylu s durazem na prehlednost (Ferrari Red & Neutral White).

## Funkce

* Uvodni obrazovka se spustenim testu.
* Casovac: Limit 10 sekund na kazdou otazku.
* Interaktivita: Okamzita blokace odpovedi po vyprseni casu nebo vyberu.
* Vyhodnoceni: Zobrazeni celkoveho skore a procentualni uspesnosti.
* Responsivita: Plne funkcni na desktopu i mobilnich zarizenich.

## Pozadavky

Pred spustenim se ujistete, ze mate nainstalovany:
* Node.js, verze 14 nebo novejsi
* npm

## Instalace

1. Klonovani repozitare (nebo stazeni a rozbaleni projektu):
   git clone <url-repozitare>
   cd nazev-slozky

2. Instalace zavislosti:
   Ve slozce projektu spustte prikaz pro instalaci balicku (React, Vite atd.):
   npm install

## Spusteni

Pro spusteni vyvojoveho serveru (development mode) pouzijte prikaz:

npm run dev
## Architektura aplikace

Projekt vyuziva Vite pro rychly build a React (Hooks) pro spravu stavu.

### Struktura souboru
* src/App.jsx - Hlavni radic aplikace.
    * Udrzuje globalni stavy: gameStarted (hra bezi/nebezi), score (pocet bodu) a currentQuestionIndex.
    * Podminene vykresluje tri faze: Start Screen -> Quiz -> Result.
* src/components/Quiz.jsx - Logika kola.
    * Ridi zobrazeni jedne otazky.
    * Obsahuje useEffect pro casovac (odpocet 10s).
    * Resi blokaci interakce, pokud vyprsi cas.
* src/components/questions.js - Data.
    * Staticke pole objektu s otazkami, moznostmi a spravnou odpovedi.
* src/App.css - Styly.
    * Vyuziva CSS Variables (:root) pro snadnou zmenu barevneho schematu.
    * Design je minimalisticky.

### Tok dat (Data Flow)
1. App.jsx posle aktualni data otazky do Quiz.jsx.
2. Quiz.jsx spusti odpocet casu.
3. Po kliknuti na odpoved (nebo vyprseni casu) Quiz.jsx vyhodnoti spravnost a posle vysledek zpet do App.jsx pres callback onAnswer.
4. App.jsx pricte body, zvysi index otazky a prekresli komponentu s novymi daty (coz resetuje casovac v Quiz.jsx).