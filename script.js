const sidebar = document.getElementById('sidebar');
const sidebarOpen = document.getElementById('sidebarOpen');
const sidebarClose = document.getElementById('sidebarClose');
sidebarOpen.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});