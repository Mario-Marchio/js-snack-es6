// es3
const bikes = [
  { 
    name: 'Specialized',
    weight: 6 
  },
  {
    name: 'Trek',
    weight: 7 
  },
  {
    name: 'Giant', 
    weight: 8 
  },
  {
    name: 'Cannondale', 
    weight: 9 
  },
  {
    name: 'Bianchi', 
    weight: 5 
  },
  {
    name: 'Scott', 
    weight: 4 
  },
  {
    name: 'Pinarello', 
    weight: 10 
  },
];

let minWeight = 10000;
let lightestBike;

for (const { name, weight } of bikes) {
  if (weight < minWeight) {
    minWeight = weight;
    lightestBike = { name, weight };
  }
}

console.log('la bici con il  peso minore è :', lightestBike);
