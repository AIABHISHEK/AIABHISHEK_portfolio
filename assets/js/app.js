// share button action 

const shareData = {
    title: 'AIABHISHEK',
    text: 'Check out my portfolio website',
    url: 'https://playsite.store'
  }
  
  const btn = document.getElementsByClassName('share-button');
//   const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
    //   resultPara.textContent = 'MDN shared successfully'
    } catch (err) {
    //   resultPara.textContent = `Error: ${err}`
    }
  });