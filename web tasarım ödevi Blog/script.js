
// projeler bölümü 

function toggle() {
    var projects = document.getElementById("projects");
    if (projects.style.display === "none" || projects.style.display === "") {
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }
}

// time 

const today = new Date();
  const formattedDate = today.toISOString().split("T")[0]; 
  document.getElementById("current-date").textContent = today.toLocaleDateString("tr-TR");
  document.getElementById("current-date").setAttribute("datetime", formattedDate);

// form 

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    if (emailInput.value.trim() === "") {
        errorMessage.textContent = "E-posta adresi boş bırakılamaz!";
        event.preventDefault(); 
    } else {
        errorMessage.textContent = ""; 
    }
});

// dark theme 

const themeToggle = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = 'Light Theme';
    }
}


themeToggle.addEventListener('click', () => {
    
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Yeşil Tema';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Mavi Tema';
    }
});