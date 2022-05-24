import { getWorkshops, logout } from '../fetch-utils.js';

const workShopList = document.querySelector('workshop-list');
const logOut = document.getElementById('logout');

logOut.addEventListener('click', () => {
    logout();
});

async function renderWorkshop() {
}
