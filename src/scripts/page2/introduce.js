const navLink = document.getElementById('nav-link');
const navLink2 = document.getElementById('nav-link2');

navLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '../../index.html'
})

navLink2.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '../../page/policy.html'
})