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

// Contact Form Data Saving 
const scriptURL = "https://script.google.com/macros/s/AKfycbyHN4qqAERDICAW64zOszQUSjaP1NJ0JOAU_nO4PeJIVH8EpqhE2dh-z_fRLeAznVdpaw/exec";
const form = document.forms["contact-form"];
const submitButton = document.getElementById("submit");
const msgElement = document.getElementById("msgg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Disable the submit button and show loading spinner
    submitButton.disabled = true;
    msgElement.innerHTML = "Submitting... Please Wait";
    msgElement.style.color = "#D3D3D3";

    var formData = new FormData(form);

    fetch(scriptURL, {
        method: "POST",
        body: formData,
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.result === 'success') {
            msgElement.innerHTML = "Message Sent Successfully";
            msgElement.style.color = "green";
            form.reset();
        } else {
            msgElement.innerHTML = "Error Occurred: " + data.error;
            msgElement.style.color = "red";
        }

        setTimeout(() => {
            submitButton.disabled = false;
        }, 2000);

        setTimeout(() => { msgElement.innerHTML = ""; }, 8000);
    })
    .catch(error => {
        msgElement.innerHTML = "Error Occurred";
        msgElement.style.color = "red";
        submitButton.disabled = false;
    });
});
