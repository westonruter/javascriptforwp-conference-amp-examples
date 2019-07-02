const toggleNavMenu = document.getElementById( 'toggleNavMenu' );
const navMenu = document.getElementById( 'navMenu' );

toggleNavMenu.addEventListener( 'click', () => {
    // TODO: Replace with navMenu.hidden once closed: https://github.com/ampproject/amphtml/issues/23156
    const hidden = ! navMenu.classList.contains( 'hidden' );
    navMenu.classList.toggle( 'hidden', hidden );

    toggleNavMenu.setAttribute( 'aria-expanded', hidden ? 'false' : 'true' );
} );
