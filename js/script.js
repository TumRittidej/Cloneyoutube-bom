function showInput() {
    const showsearchbox = document.querySelector('.searchbox input')

    showsearchbox.classList.toggle('showinput')
}

function showProfile() {
    const showprofile = document.querySelector('.profile')

    showprofile.classList.toggle('showprofile')
}

function toggleMenu() {
    const openMenu = document.querySelector('.sidebar-icon')
    const closeMenu = document.querySelector('nav.sidebar')
    const closeMenuicon = document.querySelector('.sidebar-icon')
    const opensidebar = document.querySelector('nav.sidebar')

    openMenu.classList.toggle('showsidebar-icon')
    closeMenu.classList.toggle('hidesidebar')
    closeMenuicon.classList.toggle('hidesidebar-icon')
    opensidebar.classList.toggle('showsidebarwidth1300px')
}
