function toggleNews(button) {
    const newsBox = button.nextElementSibling;
    newsBox.style.display = newsBox.style.display === 'block' ? 'none' : 'block';
}

// انیمیشن ظاهر شدن کارت‌ها هنگام اسکرول
const cards = document.querySelectorAll('.card');

function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);
