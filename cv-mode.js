const toggle = document.getElementById('cv-mode-toggle');
const body = document.body;
toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;
    if (isChecked) {
        body.classList.add('dark-mode');
    } 
    else 
    {
        body.classList.remove('dark-mode');
    }
});