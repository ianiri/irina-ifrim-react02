import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact);

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value;
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