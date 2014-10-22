define( [
	"jquery",
	"ui/button"
], function( $ ) {

module( "Button: events" );

asyncTest( "When button loses focus, ensure active state is removed", function( assert ) {
	expect( 1 );

	var element = $( "#button" ).button();

	element.one( "keypress", function() {
		element.one( "blur", function() {
			assert.lacksClasses( element, "ui-state-active",
				"button loses active state appropriately" );
			start();
		}).blur();
	});

	element.focus();
	setTimeout(function() {
		element
			.simulate( "keydown", { keyCode: $.ui.keyCode.ENTER } )
			.simulate( "keypress", { keyCode: $.ui.keyCode.ENTER } );
	});
});

} );
