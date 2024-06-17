document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('night-toggle');
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('noite');
    }
    
    button.addEventListener('click', function () {
        if(document.body.classList.contains('noite')){
            document.body.classList.remove('noite');
        } else {
            document.body.classList.add('noite');
        }
    });
});