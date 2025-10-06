document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
window.scrollTo({
top: targetElement.offsetTop - 70,
behavior: 'smooth'
});
});
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
this.reset();

});