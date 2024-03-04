window.addEventListener('scroll', function() {
    var navBar = document.getElementById('nav_bar');
    var navHeight = navBar.offsetHeight;
    var scrollPos = window.scrollY;

    if (scrollPos >= navHeight) {
        navBar.style.position = 'fixed';
        navBar.style.top = '0';
        navBar.style.left = '0';
        navBar.style.width = '100%';
        navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navBar.style.zIndex = '1000';
        document.body.style.paddingTop = navHeight + 'px'; // Adjust body padding based on nav height
    } else {
        navBar.style.position = 'static'; // Keep navigation bar static
        document.body.style.paddingTop = '0';
    }

    var sections = document.querySelectorAll('section');
    var homeSection = document.getElementById('Home');

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - navHeight;
        var sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            var id = section.getAttribute('id');
            var navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // Handle the home section separately
    if (scrollPos === 0 || (scrollPos < homeSection.offsetTop + homeSection.offsetHeight && scrollPos > homeSection.offsetTop)) {
        var navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelector('nav a[href="#Home"]').classList.add('active');
    }
});
