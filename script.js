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

    loader.classList.add("fade-out");

    setTimeout(() => {
        loader.style.display = "none";
    }, 500); 
});


const scriptURL = "https://script.google.com/macros/s/AKfycbw8lrd_i81uKeBMbVoxAbMjY8J1U1atCgIwOcO4TeJICcLA8ylzb5gCj_sXseAK2Tkrqg/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(form);
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Append values to the formData
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);
    console.log('FormData:', formData);

    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            formData.forEach((value, key) => {
                console.log(key + ": " + value);
            });
            msgg.innerHTML = "Message Sent Successfully";
            form.reset();
            setTimeout(function () {
                msgg.innerHTML = "";
            }, 4000);
        })
        .catch((error) => {
            msgg.innerHTML = "Error Occurred";
        });
});