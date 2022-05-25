import { checkAuth, logout, createParticipant } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.create-form');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const participantForm = new FormData(form);
    console.log(participantForm.get('create-name'));

    await createParticipant({}); // Continue from Here
});