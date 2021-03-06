<?php

namespace OOUI;

/**
 * Dropdown input widget, wrapping a `<select>` element. Intended to be used within a
 * OO.ui.FormLayout.
 */
class DropdownInputWidget extends InputWidget {

	/**
	 * HTML `<option>` tags for this widget.
	 * @var Tag[]
	 */
	protected $options = array();

	/**
	 * @param array $config Configuration options
	 * @param array[] $config['options'] Array of menu options in the format
	 *   `array( 'data' => …, 'label' => … )`
	 */
	public function __construct( array $config = array() ) {
		// Parent constructor
		parent::__construct( $config );

		// Initialization
		$this->setOptions( isset( $config['options'] ) ? $config['options'] : array() );
		$this->addClasses( array( 'oo-ui-dropdownInputWidget' ) );
	}

	protected function getInputElement( $config ) {
		return new Tag( 'select' );
	}

	public function setValue( $value ) {
		$this->value = $this->cleanUpValue( $value );
		foreach ( $this->options as &$opt ) {
			if ( $opt->getAttribute( 'value' ) === $this->value ) {
				$opt->setAttributes( array( 'selected' => 'selected' ) );
			} else {
				$opt->removeAttributes( array( 'selected' ) );
			}
		}
		return $this;
	}


	/**
	 * Set the options available for this input.
	 *
	 * @param array[] $options Array of menu options in the format
	 *   `array( 'data' => …, 'label' => … )`
	 * @chainable
	 */
	public function setOptions( $options ) {
		$value = $this->getValue();
		$isValueAvailable = false;
		$this->options = array();

		// Rebuild the dropdown menu
		$this->input->clearContent();
		foreach ( $options as $opt ) {
			$option = new Tag( 'option' );
			$option->setAttributes( array( 'value' => $opt['data'] ) );
			$option->appendContent( isset( $opt['label'] ) ? $opt['label'] : $opt['data'] );

			if ( $value === $opt['data'] ) {
				$isValueAvailable = true;
			}

			$this->options[] = $option;
			$this->input->appendContent( $option );
		}

		// Restore the previous value, or reset to something sensible
		if ( $isValueAvailable ) {
			// Previous value is still available
			$this->setValue( $value );
		} else {
			// No longer valid, reset
			if ( count( $options ) ) {
				$this->setValue( $options[0]['data'] );
			}
		}

		return $this;
	}
}
