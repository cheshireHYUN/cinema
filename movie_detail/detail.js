const foldbtn = document.querySelector('.fold');
const foldbtninfo = document.querySelector('.fold_info');

foldbtn.addEventListener('click', ()=>{
    foldbtninfo.classList.toggle('active');
});