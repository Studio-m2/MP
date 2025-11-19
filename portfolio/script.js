document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
        { name: 'Paris', image: '3.PNG' },
        { name: 'New York', image: '3.PNG' },
        { name: 'Tokyo', image: '3.PNG' },
        { name: 'Sydney', image: '3.PNG' },
        { name: 'Rome', image: '3.PNG' },
        { name: 'Barcelona', image: '3.PNG' }
    ];

    const destinationCards = document.getElementById('destinationCards');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
        `;
        destinationCards.appendChild(card);
    });

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredDestinations = destinations.filter(destination => destination.name.toLowerCase().includes(searchInput));
        
        destinationCards.innerHTML = '';
        filteredDestinations.forEach(destination => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <h3>${destination.name}</h3>
            `;
            destinationCards.appendChild(card);
        });
    });
});
