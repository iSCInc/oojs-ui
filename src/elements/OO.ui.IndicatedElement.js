/**
 * Element containing an indicator.
 *
 * @class
 * @abstract
 *
 * @constructor
 * @param {jQuery} $indicator Indicator node, assigned to #$indicator
 * @param {Object} [config] Configuration options
 * @cfg {string} [indicator=''] Symbolic indicator name
 * @cfg {string} [indicatorLabel=''] Description of indicator meaning
 */
OO.ui.IndicatedElement = function OoUiIndicatedElement( $indicator, config ) {
	// Config intialization
	config = config || {};

	// Properties
	this.$indicator = $indicator;
	this.indicator = null;

	// Initialization
	this.$indicator.addClass( 'oo-ui-indicatedElement-indicator' );
	this.setIndicator( config.indicator );
	this.setIndicatorLabel( config.indicatorLabel );
};

/* Methods */

/**
 * Set the indicator.
 *
 * @method
 * @param {string} [value] Symbolic name of indicator to use
 * @chainable
 */
OO.ui.IndicatedElement.prototype.setIndicator = function ( value ) {
	if ( this.indicator ) {
		this.$indicator.removeClass( 'oo-ui-indicator-' + this.indicator );
		this.indicator = null;
	}
	if ( typeof value === 'string' ) {
		value = value.trim();
		if ( value.length ) {
			this.$indicator.addClass( 'oo-ui-indicator-' + value );
			this.indicator = value;
		}
	}
	this.$element.toggleClass( 'oo-ui-indicatedElement', !!this.indicator );

	return this;
};

/**
 * Set the indicator label.
 *
 * @method
 * @param {string} [label] Description of indicator meaning
 * @chainable
 */
OO.ui.IndicatedElement.prototype.setIndicatorLabel = function ( label ) {
	if ( typeof label === 'string' && label.length ) {
		this.$indicator.attr( 'title', label );
	} else {
		this.$indicator.removeAttr( 'title' );
	}

	return this;
};