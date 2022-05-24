import { getWorkshops, logout } from '../fetch-utils.js';

const workShopList = document.querySelector('workshop-list');
const logOut = document.getElementById('logout');

logOut.addEventListener('click', () => {
    logout();
});

async function renderWorkshop() {
    const data = await getWorkshops();
    workShopList.textContent = '';

    for (let workshop of data) {
        const workshopDiv = document.createElement('h4');
        workshopDiv.setAttribute('class', 'workshop-div');


    }
}

getWorkshops();