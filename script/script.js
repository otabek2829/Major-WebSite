window.addEventListener('load', function (e) {
        // Nav menu 

        const barsBtn = document.querySelector("#navMenu")
        const menuList = document.querySelector(".navbar .navbar-nav")
        const collapse = document.querySelector(".navbar .collapse")
        const navbar = document.querySelector(".navbar")
        barsBtn.addEventListener('click', () => {
            barsBtn.classList.toggle('active')
            menuList.classList.toggle('show')
            collapse.style.display = 'block'
            if (menuList.classList.contains('show')) {
                    navbar.classList.add('navbar-theme')
                } else {
                    collapse.style.display = 'none'
                navbar.classList.remove('navbar-theme')
            }
        })
    
});