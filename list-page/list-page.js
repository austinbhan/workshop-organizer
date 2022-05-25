import { getWorkshops, logout } from '../fetch-utils.js';

const workShopsContainer = document.querySelector('.workshops-container');
const logOut = document.getElementById('logout');
const createButton = document.getElementById('create-button');

createButton.addEventListener('click', () => {
    location.replace('../create-page');
});

logOut.addEventListener('click', () => {
    logout();
});

export async function renderWorkShops() {
    workShopsContainer.textContent = '';
    const data = await getWorkshops();

    for (let workshop of data) {
        const workShopDiv = document.createElement('div');
        workShopDiv.setAttribute('class', 'workshop');

        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'workshop-name');
        h3.textContent = workshop.name;

        const ul = document.createElement('ul');
        ul.setAttribute('class', 'participants');

        for (let participant of workshop.participants) {
            const participantName = document.createElement('li');
            participantName.textContent = participant.name;
            
            const participantContact = document.createElement('li');
            participantContact.textContent = participant.contact_info;
            ul.append(participantName, participantContact);
        }

        workShopsContainer.append(workShopDiv);
        workShopDiv.append(h3, ul);
    }
}
renderWorkShops();
