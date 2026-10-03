const search = document.querySelector('#search');
const buttons = [...document.querySelectorAll('.filters button')];
const cards = [...document.querySelectorAll('.tool-card')];
const empty = document.querySelector('#emptyState');
let activeFilter = 'all';
function updateTools(){
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    const filterMatch = activeFilter === 'all' || categories.includes(activeFilter);
    const text = `${card.textContent} ${card.dataset.search}`.toLowerCase();
    const searchMatch = !q || text.includes(q);
    card.hidden = !(filterMatch && searchMatch);
    if(!card.hidden) visible++;
  });
  empty.hidden = visible !== 0;
}
buttons.forEach(btn => btn.addEventListener('click', () => {
  activeFilter = btn.dataset.filter;
  buttons.forEach(b => b.classList.toggle('active', b === btn));
  updateTools();
}));
search.addEventListener('input', updateTools);
document.querySelector('#year').textContent = new Date().getFullYear();
