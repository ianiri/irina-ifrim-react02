const notificationBar = document.querySelector('.notification-bar');

const closingIcon = document.createElement('span');
closingIcon.classList.add('position-absolute', 'p-3', 'fw-bold', 'top-0', 'end-0', 'close-message');
closingIcon.setAttribute("role", "button");
closingIcon.innerText = 'x';

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
  notificationBar.append(closingIcon);
  setTimeout(() => {
    if (messageElement !== undefined) {
      clearMessages();
    }
  },5000);
};

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

//delete message 
closingIcon.addEventListener('click', () => {
  clearMessages();
});

export default notificationBar;