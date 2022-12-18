const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

//ex01
console.warn(`Folosind obiectul person si reduce, afiseaza in consola un string care contine skill-urile de pe pozitiile pare ale arrayului, separate prin virgula`);

const skillArray1 = person.skills.reduce((skillArray1, skill, index) => {
  if (index % 2 === 0) {
    skillArray1.push(skill);
  };

  return skillArray1;
}, []);
console.log(skillArray1.toString());


//ex02
console.warn(`In mod similar, afiseaza skill-urile care NU incep cu j.`);

const skillArray2 = person.skills.reduce((skillArray2, skill) => {
  if (!skill.toLowerCase().startsWith('j')) {
    skillArray2.push(skill);
  };

  return skillArray2;
}, []);
console.log(skillArray2.join(','));


//ex03
console.warn(`Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`);
 
const message1 = person.friends.reduce((message1, { name, surname }, index, friends) => {
  let punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }
  message1 += `${name} ${surname}${punctuation}`;

  return message1;
}, 'Prietenii mei se numesc ');
console.log(message1);


//ex06
console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara."`);

const message6 = person.friends.reduce((message6, friend) => {
  const {age, name} = friend;
  const diff = person.age - age;

  if (age % 2 !== 0) {
    message6 += `Intre ${person.name} si ${person.name} este o diferenta de ${diff} ani. `;
  }

  return message6;
}, '');
console.log(message6.trim());



//Tema 12 decembrie
//ex04
console.warn(`Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`);

const message4 = person.friends.reduce((message4, friend) => {
  const {name, surname, age} = friend;

  if (age >= 30) {
    message4 += age;
  }
  return message4;
}, 0);
console.log(message4);


//ex05
console.warn(`Folosind reduce, afiseaza suma anilor de nastere a persoanelor.`);

const message5 = person.friends.reduce((message5, {age}) => {
  const currentYear = new Date().getFullYear();
  message5 += currentYear - age;
  return message5;

}, 0);
console.log(message5);


//ex07
console.warn(`Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile persoanei, separate prin virgula`);

const message7 = person.skills.reduce((message7, skill, index) => {
  const punctuation = index === person.skills.length - 1 ? '' : ', ';
  message7 += `${skill}${punctuation}`;

  return message7;
}, '');
console.log(message7);


//ex08
console.warn(`In mod similar, afiseaza skillurile care incep cu c`);

const skillArray8 = person.skills.reduce((skillArray8, skill) => {
  if (skill.toLowerCase().startsWith('c')) {
    skillArray8.push(skill);
  };

  return skillArray8;
}, []);
console.log(skillArray8.join(', '));


//ex09
console.warn(`Folosind reduce, afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."`);
 
const message9 = person.friends.reduce((message9, { surname }, index, friends) => {
  const punctuation = index === friends.length - 1 ? '.' : ', ';

  message9 += `${surname}${punctuation}`;

  return message9;
}, 'Numele de familie ale prietenilor mei sunt: ');
console.log(message9);


//ex10
console.warn(`Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`);

const message10 = person.friends.reduce((message10, { age }) => {

  return message10 += age;
}, 0);
console.log(message10);


//ex11
console.warn(`Folosind reduce, afiseaza suma anilor  persoanelor.`);

const message11 = person.friends.reduce((message11, { age }) => {

  return message11 += age;
}, 0);
console.log(message11 + person.age);


//ex12
console.warn(`Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`);

const message12 = person.friends.reduce((message12, { age }) => {

  return message12 += person.age - age;
}, 0);
console.log(message12);


//ex13
console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`);
 
const message13 = person.friends.reduce((message13, { name, age }, index, friends) => {
  const punctuation = index === friends.length - 1 ? '.' : '. ';
  const diff = person.age - age;
  const pluralize = diff > 1 && diff !== 0 ? 'ani' : 'an';

  message13 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ${pluralize}${punctuation}`;

  return message13;
}, '');
console.log(message13);