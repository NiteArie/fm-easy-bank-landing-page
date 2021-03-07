(() => {
    const headerNavigationElement = document.querySelector(".js-header-nav");
    const headerMenuIconElement = document.querySelector(".js-header-menu-icon");

    var isMenuHidden = true;

    headerMenuIconElement.addEventListener("click", (event) => {

        isMenuHidden = !isMenuHidden;

        if (isMenuHidden) {
            
            headerNavigationElement.classList.remove("header__nav--mobile");

            headerMenuIconElement.src = "images/icon-hamburger.svg";

        } else {
            headerNavigationElement.classList.add("header__nav--mobile");

            headerMenuIconElement.src = "images/icon-close.svg";
        }

    })
})();