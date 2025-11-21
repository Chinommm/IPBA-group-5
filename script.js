// Pull Tab dropdown
document.querySelector(".pull-tab").onclick = () => {
    const panel = document.querySelector(".dropdown-panel");

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;  // close
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px"; // open
    }
};
