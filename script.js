// script.js
let currentPage = 1;

function showCard() {
    document.getElementById('initialMessage').classList.add('hidden');
    document.getElementById('greetingCard').classList.remove('hidden');
    nextPage(); // Call nextPage() to show the first page
}

function showPage(page) {
    const totalPages = 3;
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`page${i}`);
        if (i === page) {
            pageElement.style.transform = 'rotateY(0deg)';
        } else {
            pageElement.style.transform = 'rotateY(180deg)';
        }
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        showPage(currentPage);
    } else {
        // Handle the case where we're on the last page
        currentPage = 1;
        showPage(currentPage);
    }
}

document.getElementById('showCardButton').addEventListener('click', showCard);
document.getElementById('prevButton').addEventListener('click', prevPage);
document.getElementById('nextButton').addEventListener('click', nextPage);