import { addMessage, clearMessages } from './notificationBar.js';
import { createContact, createPet, deleteContact, deletePet, getContact, updateContact, updatePet} from "./query.js";
import createMessage from './message.js';
import { render as renderEditContact} from "./editContact.js";
import { clearContent } from './utils.js';
import { render as renderPetForm} from "./addPetForm.js";
import { render as renderEditPet } from './editPet.js';


const stage = document.querySelector('.stage');

//cancel action button
stage.addEventListener('click', (event) => {
  const { target} = event;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('cancel-button')) {
    return;
  }

  clearContent(stage);
});

//create contact
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('add-contact')) {
    return;
  }

  const form = target;
  // elemente html 
  const {name, surname, phone, email} = form;
  const contact = {
    id: Number(Date.now().toString().slice(-6)),
    name: name.value,
    surname: surname.value,
    phone: phone.value,
    email: email.value,
  }
  
  createContact(contact);
  addMessage(createMessage(`Contact ${name.value} ${surname.value} created.`));
  clearContent(stage);
});

//delete contact
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('delete-contact')) {
    return;
  }

  const button = target;
  const parent = button.parentElement;
  const contactId = Number(parent.dataset.contactId);

  deleteContact(contactId);
  parent.remove();

  clearMessages();
  addMessage(createMessage('Contact removed', 'danger'))
});

//edit contact button
stage.addEventListener('click', (event) => {
    const { target } = event;

    if (target.nodeName !== 'BUTTON' || !target.classList.contains('edit-contact-button')) {
      return;
    }
    
    const button = target;
    const parentElement = button.parentElement;
    const contactId = Number(parentElement.dataset.contactId);
    const contact = getContact(contactId);

    clearContent(stage);

    stage.append(renderEditContact(contact));
});

//edit contact submit
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('edit-contact')) {
    return;
  };

  const form = target;
  // DOM elements (need .value)
  const { name, surname, phone, email, id } = form;
  const contactId = id.value;
  const contact = getContact(contactId);

  updateContact(contactId, {
    name: name.value,
    surname: surname.value,
    phone: phone.value,
    email: email.value,
  });

  clearContent(stage);
  clearMessages();
  addMessage(createMessage(`Contact ${contact.name} ${contact.surname} updated.`));
});

// add pet button
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('add-pet-button')) {
    return;
  }

  const button = target;
  const parentElement = button.parentElement;
  const contactId = parentElement.dataset.contactId;

  clearContent(stage);
  stage.append(renderPetForm(contactId));
});

//create pet submit
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('add-pet')) {
    return;
  };
  
  const form = target;
  //DOM elements (need .value)
  const { name, species, age, contactId } = form;

  createPet(contactId.value, { 
    name: name.value,
    species: species.value,
    age: age.value,
    id: Number(Date.now().toString().slice(-6)),
  });
  const contact = getContact(contactId.value);

  clearContent(stage);

  addMessage(createMessage(`Pet ${name.value} created for contact ${contact.name} ${contact.surname} (id: ${contactId.value}).`));
});

// edit pet button
stage.addEventListener('click', (event) => {
  const { target } = event;
  const button = target;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('edit-pet-button')) {
    return;
  }

  const contactContainer = button.closest('.contact');
  const contactId = Number(contactContainer.dataset.contactId);
  const petContainer = button.closest('.pet');
  const petId = Number(petContainer.dataset.petId);
  
  clearContent(stage);

  stage.append(renderEditPet(contactId, petId));
});

//edit pet submit
stage.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;

  if (target.nodeName !== 'FORM' || !target.classList.contains('edit-pet')) {
    return;
  };

  const form = target;
  // DOM elements (need .value)
  const { name, species, age, contactId, id } = form;
  const { name: contactName, surname: contactSurname } = getContact(
    contactId.value,
  );
  const petId = id.value;

  updatePet(contactId.value, petId, {
    name: name.value,
    species: species.value,
    age: age.value,
  });

  clearContent(stage);
  clearMessages();
  addMessage(createMessage( `Pet ${name.value} (id: ${petId}) updated for contact ${contactName} ${contactSurname} (id: ${contactId.value}).`));
});

//delete pet
stage.addEventListener('click', (event) => {
  const { target } = event;

  if (target.nodeName !== 'BUTTON' || !target.classList.contains('delete-pet-button')) {
    return;
  };

  const button = target;
  const contactContainer = button.closest('.contact');
  const contactId = Number(contactContainer.dataset.contactId);
  const petContainer = button.closest('.pet');
  const petId = Number(petContainer.dataset.petId);

  deletePet(contactId, petId);
  clearContent(stage);
  clearMessages();
  addMessage(createMessage( `Pet was deleted`));
});

export default stage;