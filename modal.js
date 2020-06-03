var modal = document.getElementById('simple-modal');
var modalBtn = document.getElementById('modal-btn');
var closeBtn = document.getElementsByClassName('close-btn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

//Function for open modal
function openModal() {
    modal.style.display = 'block';
}

//Function for close modal
function closeModal() {
    modal.style.display = 'none';
}

//Function for outside click
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}