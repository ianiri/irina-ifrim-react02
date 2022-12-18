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

//ex02
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