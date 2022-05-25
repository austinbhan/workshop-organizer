import { checkAuth, logout, createParticipant, getWorkshops } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.create-form');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const participantForm = new FormData(form);
    console.log(participantForm.get('create-name'));

    await createParticipant({ name: participantForm.get('create-name'), contact_info: participantForm.get('choose-workshop') });
    window.location('../list-page');
    form.reset();
});

window.addEventListener('load', async () => {
    const chooseWorkShop = document.getElementById('choose-workshop');
    const workShops = await getWorkshops();

    for (let workshop of workShops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        chooseWorkShop.append(option);
    }
});