const SUPABASE_URL = 'https://ekvctprnmhlihrtxfomc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdmN0cHJubWhsaWhydHhmb21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMTI1MDcsImV4cCI6MTk2Nzg4ODUwN30.3DwFaO1PRQPJQBj3OEs8ed-pA5qQ_7kbxTiw3YzzplY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

// To Get All Supabase Elements from Workshops
export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    return checkError(response);
}
