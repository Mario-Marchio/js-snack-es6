// es1
const invited = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']


const details = invited.map((ospite, i) => {
    return {
      tavolo: 'Tavolo Vip',
      nome: ospite,
      posto: i + 1
    };
  });
  console.log(details);