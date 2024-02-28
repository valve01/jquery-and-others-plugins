flowy(canvas, ongrab, onrelease, onsnap, onrearrange, spacing_x, spacing_y);

var spacing_x = 400;
var spacing_y = 1000;
// Initialize Flowy
flowy(document.getElementById("canvas"), onGrab, onRelease, onSnap, onRearrange, spacing_x, spacing_y);
function onGrab(block){
	// When the user grabs a block
}
function onRelease(){
	// When the user releases a block
}
function onSnap(block, first, parent){
	// When a block snaps with another one
}
function onRearrange(block, parent){
	// When a block is rearranged
}