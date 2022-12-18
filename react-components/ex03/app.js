const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};


//ex01
console.warn(`Folosind Object.values(), afiseaza o lista inversata cu numele complet inversat al prietenilor. `);

const friendObjects = Object.values(person.friends);
friendObjects.reverse().forEach(({name, surname}) => {
  console.log(`${surname} ${name}`);
});


//ex02
console.warn(`Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.values() `);
const message2 = Object.values(person.friends).reduce((message2, friend, index, friends) => {
  const { name } = friend;
  let punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message2 += `${name}${punctuation}`;

  return message2;

}, 'Prietenii mei sunt ');
console.log(message2);

//ex03
console.warn(`Prin aceeasi metoda, afiseaza propozitia: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`);
const message3 = Object.values(person.friends).reduce((message3, { name, age }, index, friends) => {
  const diff = person.age - age;
  let punctuation = '. ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message3 += `Diferenta de varsta intre ${name} si ${person.name} este de ${diff} ani${punctuation}`;

  return message3;

}, '');
console.log(message3);



//Tema 12 decembrie
//ex04
console.warn(`Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor (console.log / linie).`);

const message4 = Object.values(person.friends);
message4.forEach(({name, surname}) => {
  console.log(`${name} ${surname}`);
});


//ex05
console.warn(`Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.values()`);
const message5 = Object.values(person.friends).reduce((message5, friend, index, friends) => {
  const { name, surname } = friend;
  const punctuation = index === friends.length - 1 ? '.' : ', ';

  message5 += `${name} ${surname}${punctuation}`;

  return message5;

}, 'Prietenii mei sunt ');
console.log(message5);


//ex06
console.warn(`In mod similar, afiseaza propozitia  “Larry are xx ani. Steven are …”`);

const message6 = Object.values(person.friends).reduce((message6, friend, index, friends) => {
  const { name, age } = friend;
  const punctuation = index === friends.length - 1 ? '.' : '. ';

  message6 += `${name} are ${age}${punctuation}`;

  return message6;
}, '');
console.log(message6);
