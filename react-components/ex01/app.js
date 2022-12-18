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
console.warn(`Folosind metoda map pe arrayul skills, returneaza si afiseaza in consola un array in care fiecare consoana este scrisa cu litera mare (vocalele nu) `);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const arr1 = person.skills.map((skill) => {
  const skillLetters = skill.split('');

  const updatedLetters = skillLetters.map((letter) => {
    if (vowels.includes(letter.toLowerCase())) {
      return letter;
    } else {
      return letter.toLocaleUpperCase();
    }
  });

  return updatedLetters.join('');
});
console.log(arr1);


//ex02
console.warn(`Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia “Ma numesc {name} {surname} si am {age} ani.” `);

const arr2 = person.friends.map((friend) => {
  const {name, surname, age} = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;

});
console.log(arr2);


//ex05
console.warn(`Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari. `);

const arr5 = person.skills.map((skill) => {
  return skill.split('').map((letter, index, letters) => {
    if (index === 0 || index === letters.length - 1) {
      return letter.toUpperCase();
    }

    return letter;
  }).join('');
});
console.log(arr5);


//ex06
console.warn(`Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)`);

const arr6 = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});

console.log(arr6);



//Tema 12 decembrie
//ex03
console.warn(`Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia “Diferenta de varsta dintre {friendName} si {personName} este {diff}” `);

const arr3 = person.friends.map((friend) => {
  const {name, surname, age} = friend;
  const diff = person.age - age;
  const pluralize = diff > 1 && diff !== 0 ? 'ani' : 'an';

  return `Diferenta de varsta dintre ${name} si ${person.name} este ${diff} ${pluralize}.`;

});
console.log(arr3);


//ex04
console.warn(`Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill `);

const arr4 = person.skills.map((skill) => {
  const diff = person.age - skill.length;

  return `${diff}`;

});
console.log(arr4);


//ex07
console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);

const arr7 = person.friends.map((friend) => {
  const {name, surname, age} = friend;

  return `${name} are ${age} ani.`;

});
console.log(arr7);


//ex08
console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);

const arr8 = person.friends.map((friend) => {
  const {name, surname, age} = friend;

  return `${surname} ${name}`;
});
console.log(arr8);


//ex09
console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare pozitie diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie`);

const arr9 = person.friends.map((friend) => {
  const {name, surname, age} = friend;
  const personName = person.name + person.surname;
  const diff = age - personName.length;

  return `${diff}`;
});
console.log(arr9);


//ex10
console.warn(`Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si varsta prietenului`);

const arr10 = person.skills.map((skill) => {
  return person.friends.map((friend) => {
    const {name, surname, age} = friend;
    const diff = age - skill.length;

    return `${diff}`;
  })
});
console.log(arr10);
