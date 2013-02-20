/*!
 * VisualEditor UserInterface TextInputMenuWidget class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Creates an ve.ui.TextInputMenuWidget object.
 *
 * @class
 * @extends ve.ui.MenuWidget
 *
 * @constructor
 * @param {ve.ui.TextInputWidget} input Text input widget to provide menu for
 * @param {Object} [config] Config options
 */
ve.ui.TextInputMenuWidget = function VeUiTextInputMenuWidget( input, config ) {
	// Parent constructor
	ve.ui.MenuWidget.call( this, config );

	// Properties
	this.input = input;

	// Initialization
	this.$.addClass( 've-ui-textInputMenuWidget' );
};

/* Inheritance */

ve.inheritClass( ve.ui.TextInputMenuWidget, ve.ui.MenuWidget );

/**
 * Shows the menu.
 *
 * @method
 * @chainable
 */
ve.ui.TextInputMenuWidget.prototype.show = function () {
	var $input = this.input.$input;

	// Call parent method
	ve.ui.MenuWidget.prototype.show.call( this );

	// Position under input
	this.$.css( {
		'left': $input.offset().left,
		'top': $input.offset().top + $input.outerHeight( true )
	} );

	return this;
};
