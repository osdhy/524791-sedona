(function() {
    let button = document.querySelector('.expand-button');
    let form = document.querySelector('.form-container');
    button.addEventListener('click', ()=>{
      form.style.display = form.style.display === 'none' ? '' : 'none'
    })
  })()