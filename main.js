// Wait for the window to fully load
window.onload = () => {
    // Use a timeout to remove the "not-loaded" class after 1 second
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);
};
