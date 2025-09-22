document.addEventListener('DOMContentLoaded', () => {
// Smooth scroll untuk tombol "Lihat Proyek"
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links){
link.addEventListener('click', (e)=>{
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
if(target){
window.scrollTo({
top: target.offsetTop - 20,
behavior:'smooth'
});
}
});
}


// Animasi masuk untuk card
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0)';
}
});
}, {threshold:0.1});


cards.forEach(card => {
card.style.opacity = 0;
card.style.transform = 'translateY(20px)';
card.style.transition = 'all 0.6s ease';
observer.observe(card);
});


// Toggle dark/light mode dengan penyimpanan preferensi
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙/☀️';
toggleBtn.className = 'toggle-mode';
document.querySelector('header').appendChild(toggleBtn);


// Cek preferensi dari localStorage
if(localStorage.getItem('theme') === 'light'){
document.documentElement.classList.add('light');
toggleBtn.textContent = '🌙';
} else {
toggleBtn.textContent = '☀️';
}


toggleBtn.addEventListener('click', ()=>{
document.documentElement.classList.toggle('light');
if(document.documentElement.classList.contains('light')){
toggleBtn.textContent = '🌙';
localStorage.setItem('theme','light');
}else{
toggleBtn.textContent = '☀️';
localStorage.setItem('theme','dark');
}
});
});
0