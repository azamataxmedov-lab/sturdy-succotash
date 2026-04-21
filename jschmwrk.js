// text ustuda amallar bajarib koramiz
// textContent & inerHTML


// textContent
const titleText = document.querySelector('#title')
// console.log(titleText);
// console.log((titleText.textContent));
titleText.textContent += 'ni organdik'

const listIteam = document.querySelectorAll('.list-iteam')

listIteam.forEach((iteam) => {
  // console.log(iteam);
  if (iteam.textContent === 'JavaScript') {
    iteam.textContent += 'ni organyapmiz'
  } else {
  iteam.textContent += 'ni organdik'  
  }
})


// inerHTML

// const titleHTML = document.querySelector('#title')

// // console.log(titleHTML.innerHTML)
// // titleHTML.innerHTML += <b> Salom</b>
// titleHTML.textContent += <b> Salom</b>