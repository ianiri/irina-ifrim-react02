import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact);
    // [1, 'Carol', 'Carolson', '0744', 'caolr@carol.ro']

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value.toLowerCase();
      }

      return haystack;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const createContact = (contact) => {
  // push mutates
  contacts.push(contact);
}

export const deleteContact = (contactId) => {
  let contactIndex = -1;

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contactId === contact.id) {
      contactIndex = i;
  
      break;
    } 
  }

  if (contactIndex >=0) {
    //splice mutates
    contacts.splice(contactIndex, 1);
  }
}

export const getContact = (contactId) => {
  const contact = contacts.find((contact) => {
    return contact.id === Number(contactId);
  });

  return contact;
};

//edit contact submit
export const updateContact = (contactId, {name, surname, phone, email}) => {
  //asta face destructurarea:
  // const name = contact.name;

  const contact = getContact(contactId);

  if (!contact) {
    return;
  }

  contact.name = name;
  contact.surname = surname;
  contact.phone = phone;
  contact.email = email;
};

export const createPet = (contactId, pet) => {
  const contact = getContact(contactId);

  if (contact === undefined) {
    return;
  }

  contact.pets = contact.pets || [];

  //push mutates
  contact.pets.push(pet);
};

export const getPet = (contactId, petId) => {
  const contact = getContact(contactId);

  if (!contact) {
    return;
  }

  return contact.pets.find((pet) => {
    return pet.id === Number(petId);
  });
};

//edit pet submit
export const updatePet = (contactId, petId, {name, species, age}) => {
  //asta face destructurarea:
  // const name = pet.name;

  const pet = getPet(contactId, petId);

  if (!pet) {
    return;
  }

  pet.name = name;
  pet.species = species;
  pet.age = age;
};