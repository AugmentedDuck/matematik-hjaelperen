function loadNext() {
    let hiddenLog = document.getElementsByClassName("hidden")[0];
    hiddenLog.previousElementSibling.classList.add('hidden');

    hiddenLog.classList.remove('hidden')
}

function loadPrevious() {
    let hiddenLog = document.getElementsByClassName("hidden")[0];
    hiddenLog.nextElementSibling.classList.add('hidden');

    hiddenLog.classList.remove('hidden')
}