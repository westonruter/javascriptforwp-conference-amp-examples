const button = document.getElementById( 'toggleNavMenu' );
const navMenu = document.getElementById( 'navMenu' );

button.addEventListener( 'click', () => {
    // TODO: Replace with navMenu.hidden once closed: https://github.com/ampproject/amphtml/issues/23156
    const hidden = ! navMenu.classList.contains( 'hidden' );
    navMenu.classList.toggle( 'hidden', hidden );

    button.setAttribute( 'aria-expanded', hidden ? 'false' : 'true' );

    // TODO: Use dataset once it is supported.
    button.textContent = hidden ? button.getAttribute( 'data-open-text' ) : button.getAttribute( 'data-close-text' );
} );
