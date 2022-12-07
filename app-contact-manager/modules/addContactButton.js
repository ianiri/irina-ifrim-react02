import { render } from "./addContact.js";
import { clearMessages } from "./notificationBar.js";
//defalut exports can be renamed
import xmas from "./stage.js";

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', () => {
  clearMessages();
  xmas.innerHTML = '';

  xmas.append(render());
});

export default addContactButton;