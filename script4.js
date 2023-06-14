// es4
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const teams = [
  { nome: 'inter', punti: 0, falli: 0 },
  { nome: 'milan', punti: 0, falli: 0 },
  { nome: 'roma', punti: 0, falli: 0 },
  { nome: 'fiorentina', punti: 0, falli: 0 },
  { nome: 'atalanta', punti: 0, falli: 0 },
  { nome: 'lazio', punti: 0, falli: 0 },
  { nome: 'torino', punti: 0, falli: 0 },
];

for (let i = 0; i < teams.length; i++) {
  teams[i].punti = generateRandomNumber(0, 90);
  teams[i].falli = generateRandomNumber(0, 40);
}

// qua sto creando il nuovo array composto solo dai nomi e dai falli commessi dalle squadre
const newTeamsArray = teams.map(({ nome, falli }) => ({ nome, falli }));

console.log('Squadre di calcio:', teams);

console.log('Nomi e falli subiti:', newTeamsArray);