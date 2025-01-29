const sidebar = document.getElementById('sidebar');
const sidebarOpen = document.getElementById('sidebarOpen');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('#sidebar a');

sidebarOpen.addEventListener('click', () => {       // Open the sidebar
    sidebar.classList.remove('-translate-x-full');
});

sidebarClose.addEventListener('click', () => {      // Close the sidebar when clicking the close button
    sidebar.classList.add('-translate-x-full');
});

document.addEventListener('click', (event) => {     // Close the sidebar when clicking anywhere outside of it
    if (!sidebar.contains(event.target) && !sidebarOpen.contains(event.target)) {
        sidebar.classList.add('-translate-x-full');
    }
});

sidebarLinks.forEach(link => {                      // Close the sidebar and navigate when clicking on a link
    link.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
    }
});


window.addEventListener("load", function() {
    let loader = document.querySelector(".code-loader");
    loader.classList.add("hidden");
    setTimeout(() => {
        loader.style.display = "none"; 
    }, 800); // 500ms for the fade effect
});