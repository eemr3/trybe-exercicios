const readlineSync = require('readline-sync');

enum MonthsYear {
  janeiro = 'janeiro',
  fevereiro = 'fervereiro',
  marco = 'marco',
  abril = 'abril',
  maio = 'maio',
  junho = 'junho',
  julho = 'julho',
  agosto = 'agosto',
  setembro = 'setembro',
  outrubro = 'outrubro',
  novembro = 'novembro',
  dezembro = 'dezembro',
}

enum Seasons {
  outono = 'Outono',
  primavera = 'Primavera',
  verao = 'Verão',
  inverno = 'Inverno',
}

function compareMonthSul(month: string) {
  if (month === 'marco') return Seasons.outono;
  if (month === 'junho') return Seasons.inverno;
  if (month === 'setembro') return Seasons.primavera;
  if (month === 'dezembro') return Seasons.verao;
}

function compareMonthNorth(month: string) {
  if (month === 'setembro') return Seasons.outono;
  if (month === 'dezembro') return Seasons.inverno;
  if (month === 'marco') return Seasons.primavera;
  if (month === 'junho') return Seasons.verao;
}

function season(month: string, hemisphere: string): void {
  for (const key in MonthsYear) {
    if (key === month && hemisphere === 'Norte') {
      const result = compareMonthNorth(month);
      console.log(
        `No mês de ${month} e no hemisfério ${hemisphere} a estação do ano é ${result}`,
      );
    } else if (key === month && hemisphere === 'Sul') {
      const result = compareMonthSul(month);
      console.log(
        `No mês de ${month} e no hemisfério ${hemisphere} a estação do ano é ${result}`,
      );
    }
  }
}

const month = readlineSync.question('Qual Mẽs: ');
const hemisphere = readlineSync.question('Qual hemisfério (Norte ou Sul): ');

season(month, hemisphere);
