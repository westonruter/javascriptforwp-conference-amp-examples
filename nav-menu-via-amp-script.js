const toggleNavMenu = document.getElementById( 'toggleNavMenu' );
const navMenu = document.getElementById( 'navMenu' );

toggleNavMenu.addEventListener( 'click', () => {
    navMenu.hidden = ! navMenu.hidden;
} );
