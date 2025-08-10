const books = [
  { id: 1, title: "اثر مرکب", author: "دارن هاردی", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQsislw1mKlqbHRSIwGvrvA4ulg-E6JJ2B4Vz_O5U7wF7qe9v5N" },
  { id: 2, title: "قدرت عادت", author: "چارلز دوهیگ", img: "https://nashrenovin.ir/wp-content/uploads/2017/05/The-Power-of-Habit-700x959.webp" },
  { id: 3, title: "هنر ظریف بی‌خیالی", author: "مارک منسن", img: "https://www.iranketab.ir/Images/ProductImages/e579b3f206a049fdb8d28f3c5af0e8ec.jpg" },
  { id: 4, title: "شازده کوچولو", author: "آنتوان دو سنت اگزوپری", img: "https://img.taaghche.com/frontCover/25986.jpg" },
  { id: 5, title: "انسان در جستجوی معنا", author: "ویکتور فرانکل", img: "https://img.ketabrah.ir/img/l/5538560654584982.jpg" },
  { id: 6, title: "ملت عشق", author: "الیف شافاک", img: "https://img.ketabrah.ir/img/l/6374770325372115.jpg" },
  { id: 7, title: "بی‌خود و بی‌جهت", author: "نیل دگراس تایسون", img: "https://www.iranketab.ir/Images/ProductImages/92620edabbb44efaa23fa8b44574eb48.jpg" }
];

const row = document.getElementById('bookRow');
const sortEl = document.getElementById('sort');

function render(sortKey) {
  let arr = [...books];
  if (sortKey === 'latest') arr.sort((a, b) => b.id - a.id);
  else if (sortKey === 'popular') arr.reverse();
  row.innerHTML = arr.map(b => `
    <div class="book-card">
      <img src="${b.img}" alt="${b.title}">
      <div class="book-title">${b.title}</div>
      <div class="book-author">${b.author}</div>
    </div>`).join('');
}

sortEl.addEventListener('change', () => render(sortEl.value));
render('bestseller');
