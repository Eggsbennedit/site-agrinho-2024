document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('night-toggle');
    
    button.addEventListener('click', function () {
        if(document.body.classList.contains('noite')){
            document.body.classList.remove('noite');
        } else {
            document.body.classList.add('noite');
        }
    });
});