/**
 * Start drawing.
 *
 * This code is adapted from the mousemove event docs on MDN.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event#JavaScript
 *
 * @param {Event} event - Button click event.
 */
async function startDrawing( event ) {
    const canvas = document.createElement( 'canvas' );
    canvas.width = 400;
    canvas.height = 400;
    event.target.parentNode.replaceChild( canvas, event.target );
    const context = canvas.getContext( '2d' );

    // When true, moving the mouse draws on the canvas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    // Add the event listeners for mousedown, mousemove, and mouseup
    canvas.addEventListener( 'mousedown', e => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    } );

    canvas.addEventListener( 'mousemove', e => {
        if ( isDrawing === true ) {
            drawLine( context, x, y, e.offsetX, e.offsetY );
            x = e.offsetX;
            y = e.offsetY;
        }
    } );

    canvas.addEventListener( 'mouseup', e => {
        if ( isDrawing === true ) {
            drawLine( context, x, y, e.offsetX, e.offsetY );
            x = 0;
            y = 0;
            isDrawing = false;
        }
    } );

    function drawLine( context, x1, y1, x2, y2 ) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.moveTo( x1, y1 );
        context.lineTo( x2, y2 );
        context.stroke();
        context.closePath();
    }
}

document.querySelector( 'button' ).addEventListener( 'click', startDrawing, { once: true } );
