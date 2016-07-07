
var page = new WebPage();
var system = require( 'system' );

var slideWidth = system.args[3] ? system.args[3].split( 'x' )[0] : 960;
var slideHeight = system.args[3] ? system.args[3].split( 'x' )[1] : 700;

page.viewportSize = {
	width: slideWidth,
	height: slideHeight
};


page.paperSize = {
	width: Math.round( slideWidth * 2 ),
	height: Math.round( slideHeight * 2 ),
	border: 0
};

var inputFile = system.args[1] || 'index.html?print-pdf';
var outputFile = system.args[2] || 'slides.pdf';

if( outputFile.match( /\.pdf$/gi ) === null ) {
	outputFile += '.pdf';
}

console.log( 'Printing PDF (Paper size: '+ page.paperSize.width + 'x' + page.paperSize.height +')' );

page.open( inputFile, function( status ) {
	window.setTimeout( function() {
		console.log( 'Printed successfully' );
		page.render( outputFile );
		phantom.exit();
	}, 1000 );
} );

