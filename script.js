// ... (keep your existing authentication logic) ...

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetForm = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${targetForm}Form`).classList.add('active');
        });
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        console.log(login(username, password));
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        console.log(register(username, password));
    });
});