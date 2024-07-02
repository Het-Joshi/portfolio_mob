document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const pipboy = document.querySelector('.pipboy');
    const icons = document.querySelectorAll('.app-icon');

    // Function to open app window
    function openApp(appName) {
        const appWindow = document.getElementById(appName);
        appWindow.style.display = 'block';
        appWindow.classList.add('active');
    }

    // Function to close all app windows
    function closeAllApps() {
        const windows = document.querySelectorAll('.app-window');
        windows.forEach(window => {
            window.style.display = 'none';
            window.classList.remove('active');
        });
    }

    // Function to display notification
    function displayNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 10000); // Hide after 10 seconds
    }

    // Event listeners for app icons
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const app = icon.dataset.app;
            openApp(app);
        });
    });

    // Event listener for home button
    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', () => {
        closeAllApps();
    });

    // Event listeners for back buttons
    const backButton = document.querySelectorAll('.back');
    backButton.forEach(button => {
        button.addEventListener('click', () => {
            const currentWindow = document.querySelector('.app-window.active');
            currentWindow.classList.remove('active');
            currentWindow.style.display = 'none';
        });
    });

    // Event listener for menu button
    const menuButton = document.querySelector('.menu');
    menuButton.addEventListener('click', () => {
        // Launch WhatsApp chat
        window.open('https://wa.me/+917619680062', '_blank');
    });


    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Example: Send form data to server or display a notification
        displayNotification(`Message sent: ${message}`);
        contactForm.reset();
    });

    // Hide loading screen and show Pip-Boy after 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            pipboy.style.display = 'block';
            setTimeout(() => {
                pipboy.style.opacity = '1';
            }, 100); // Delay opacity transition to ensure it starts after display transition
        }, 500); // Delay hiding loading screen to ensure it's fully faded out
    }, 2000); // 3 seconds loading time
});
