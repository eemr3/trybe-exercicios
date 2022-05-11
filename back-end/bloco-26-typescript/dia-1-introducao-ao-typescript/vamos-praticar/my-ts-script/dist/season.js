"use strict";
const readlineSync = require('readline-sync');
var MonthsYear;
(function (MonthsYear) {
    MonthsYear["janeiro"] = "janeiro";
    MonthsYear["fevereiro"] = "fervereiro";
    MonthsYear["marco"] = "marco";
    MonthsYear["abril"] = "abril";
    MonthsYear["maio"] = "maio";
    MonthsYear["junho"] = "junho";
    MonthsYear["julho"] = "julho";
    MonthsYear["agosto"] = "agosto";
    MonthsYear["setembro"] = "setembro";
    MonthsYear["outrubro"] = "outrubro";
    MonthsYear["novembro"] = "novembro";
    MonthsYear["dezembro"] = "dezembro";
})(MonthsYear || (MonthsYear = {}));
var Seasons;
(function (Seasons) {
    Seasons["outono"] = "Outono";
    Seasons["primavera"] = "Primavera";
    Seasons["verao"] = "Ver\u00E3o";
    Seasons["inverno"] = "Inverno";
})(Seasons || (Seasons = {}));
function compareMonthSul(month) {
    if (month === 'marco')
        return Seasons.outono;
    if (month === 'junho')
        return Seasons.inverno;
    if (month === 'setembro')
        return Seasons.primavera;
    if (month === 'dezembro')
        return Seasons.verao;
}
function compareMonthNorth(month) {
    if (month === 'setembro')
        return Seasons.outono;
    if (month === 'dezembro')
        return Seasons.inverno;
    if (month === 'marco')
        return Seasons.primavera;
    if (month === 'junho')
        return Seasons.verao;
}
function season(month, hemisphere) {
    for (const key in MonthsYear) {
        if (key === month && hemisphere === 'Norte') {
            const result = compareMonthNorth(month);
            console.log(`No mês de ${month} e no hemisfério ${hemisphere} a estação do ano é ${result}`);
        }
        else if (key === month && hemisphere === 'Sul') {
            const result = compareMonthSul(month);
            console.log(`No mês de ${month} e no hemisfério ${hemisphere} a estação do ano é ${result}`);
        }
    }
}
const month = readlineSync.question('Qual Mẽs: ');
const hemisphere = readlineSync.question('Qual hemisfério (Norte ou Sul): ');
season(month, hemisphere);
