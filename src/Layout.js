/**
 * Container for elements.
 *
 * @abstract
 * @class
 * @extends OO.ui.Element
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
OO.ui.Layout = function OoUiLayout( config ) {
	// Initialize config
	config = config || {};

	// Parent constructor
	OO.ui.Layout.super.call( this, config );

	// Mixin constructors
	OO.EventEmitter.call( this );

	// Initialization
	this.$element.addClass( 'oo-ui-layout' );
};

/* Inheritance */

OO.inheritClass( OO.ui.Layout, OO.ui.Element );

OO.mixinClass( OO.ui.Layout, OO.EventEmitter );
