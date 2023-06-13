const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },
];
  
const grades = students.filter(student => student.grades >70 );
console.log(grades);

const gradesId = students.filter(studentId => studentId.grades >70 && studentId.id >120 );
console.log(gradesId);

for(let i = 0 ; i < students.length ; i++){
    const student = students[i];
    student.name = student.name.toUpperCase();
    console.table(student);
};