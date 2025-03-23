document.getElementById('Users').addEventListener('click', fetchUsers);


async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        if (!response.ok) {
             new Error('Network response was not ok');
        }
        const data = await response.json();
        const users = data.results;

        document.getElementById('profiles').innerHTML = '';
        const tableBody = document.getElementById('Table').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; 

        users.forEach(user => {
        
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile-card');
            profileCard.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;
            document.getElementById('profiles').appendChild(profileCard);

           
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            nameCell.textContent = `${user.name.first} ${user.name.last}`;
            emailCell.textContent = user.email;
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
