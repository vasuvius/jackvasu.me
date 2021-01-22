document.getElementById('myruns-button').onclick = function() {
    var span = document.getElementById('myruns-close'); 
    var chosenModal =  document.getElementById('myruns-modal');
    chosenModal.style.display = "block";
    span.onclick = function() {
        chosenModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == chosenModal) {
            chosenModal.style.display = "none";
        }
    }
}
document.getElementById('reactnotes-button').onclick = function() {
    var span = document.getElementById('reactnotes-close'); 
    var chosenModal =  document.getElementById('reactnotes-modal'); 
    chosenModal.style.display = "block";
    span.onclick = function() {
        chosenModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == chosenModal) {
            chosenModal.style.display = "none";
        }
    }
}
document.getElementById('cs70-button').onclick = function() {
    var span = document.getElementById('cs70-close'); 
    var chosenModal = document.getElementById('cs70-modal')
    chosenModal.style.display = "block";
    span.onclick = function() {
        document.getElementById('cs70-modal').style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == chosenModal) {
            chosenModal.style.display = "none";
        }
    }
}
document.getElementById('bacon-button').onclick = function() {
    var span = document.getElementById('bacon-close'); 
    var chosenModal = document.getElementById('bacon-modal')
    chosenModal.style.display = "block";
    span.onclick = function() {
        document.getElementById('bacon-modal').style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == chosenModal) {
            chosenModal.style.display = "none";
        }
    }
}