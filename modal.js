var modal = document.getElementById('simple-modal');
var modalBtn = document.getElementById('modal-btn');
var closeBtn = document.getElementsByClassName('close-btn')[0];
var dropdownBtn = document.getElementById("dropdown-btn");
var dropdownList = document.getElementById("dropdown-list");
var slider = document.getElementById("range-slider");
var rangeOutput = document.getElementById("range-output");

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);

// Listen for dropdown click
dropdownBtn.addEventListener("click", dropdownToggler);

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
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// Function for dropdown toggler
function dropdownToggler() {
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }
}

// Range Slider
rangeOutput.innerHTML = slider.value;
slider.oninput = function() {
    rangeOutput.innerHTML = this.value;
};