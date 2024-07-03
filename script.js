document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    updateTime(); // Initial call
    setInterval(updateTime, 1000); // Update every second

    // Your other JavaScript code here
    const icons = document.querySelectorAll('.app-icon');
    const appWindows = document.querySelectorAll('.app-window');
    const backButton = document.querySelectorAll('.back');
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const notification = document.getElementById('notification');

    function openApp(appName) {
        const appWindow = document.getElementById(appName);
        appWindow.style.display = 'block';  // Show the app window
        appWindow.classList.add('active');  // Add 'active' class for styling
    }

    function closeAllApps() {
        appWindows.forEach(window => {
            window.style.display = 'none';  // Hide all app windows
            window.classList.remove('active');  // Remove 'active' class
        });
    }

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const appName = icon.getAttribute('data-app');
            openApp(appName);
        });
    });

    backButton.forEach(button => {
        button.addEventListener('click', () => {
            closeAllApps();
        });
    });

    homeButton.addEventListener('click', () => {
        closeAllApps();
    });

    menuButton.addEventListener('click', () => {
        // Replace with your WhatsApp URL or logic
        window.open('https://wa.me/+917619680062', '_blank');
    });

    // Example form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const message = formData.get('message');
        displayNotification(`Message sent: ${message}`);
        contactForm.reset();
    });

    function displayNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 10000); // Hide after 10 seconds
    }

    // Optional: Hide loading screen and show Pip-Boy after 3 seconds
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.querySelector('.pipboy').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.pipboy').style.opacity = '1';
            }, 100); // Delay opacity transition
        }, 500); // Delay hiding loading screen
    }, 2000); // 2 seconds loading time
    // Function to update current time
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    // Update time initially and every second
    updateTime(); // Call initially to avoid delay
    setInterval(updateTime, 1000); // Update every second
});
