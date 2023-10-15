const moreBtn = document.getElementById('moreBtn');
const hiddenBtn = document.getElementById('hiddenBtn');
const moreButton = document.getElementById('moreButton');
const hiddenButton = document.getElementById('hiddenButton');
const btnTwo = document.getElementById('btn2');
const btnThree = document.getElementById('btn3');
const cardItem = document.getElementById('extra');
const boxExtra = document.getElementById('boxExtra')
const boxOne = document.getElementById('box1');
const navLink = document.getElementById('nav-link')
const navLink3 = document.getElementById('nav-link3');

navLink3.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href = '../../page/policy.html'
})

navLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '../../page/introduce.html'
})

btnTwo.addEventListener('click', (e) => {
  e.preventDefault()
  btnTwo.style.display = 'none'
  btnThree.style.display = 'block'
  boxOne.style.display = 'flex'
})

btnThree.addEventListener('click', (e) => {
  e.preventDefault()
  btnTwo.style.display = 'block'
  btnThree.style.display = 'none'
  boxOne.style.display = 'none'
})

moreBtn.addEventListener('click', (e) => {
  e.preventDefault()
  moreBtn.style.display = 'none'
  hiddenBtn.style.display = 'block'
  cardItem.style.display = 'flex'
})

hiddenBtn.addEventListener('click', (e) => {
  e.preventDefault()
  moreBtn.style.display = 'block'
  hiddenBtn.style.display = 'none'
  cardItem.style.display = 'none'
})

hiddenButton.addEventListener('click', (e) => {
  e.preventDefault()
  moreButton.style.display = 'block'
  hiddenButton.style.display = 'none'
  boxExtra.style.display = 'none'
})

moreButton.addEventListener('click', (e) => {
  e.preventDefault()
  moreButton.style.display = 'none'
  hiddenButton.style.display = 'block'
  boxExtra.style.display = 'flex'
})