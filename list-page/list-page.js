import { getWorkshops, logout } from '../fetch-utils.js';

const workShopsContainer = document.querySelector('.workshops-container');
const logOut = document.getElementById('logout');

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
            ul.append(participantName);
        }


        workShopsContainer.append(workShopDiv);
        workShopDiv.append(h3, ul);
    }
}
renderWorkShops();
