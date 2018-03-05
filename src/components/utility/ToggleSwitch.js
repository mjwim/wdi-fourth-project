import React, {Component} from 'react';
import Switch from 'react-toggle-switch';

class ToggleSwitch extends Component {

  switchState = () => {
    return this.props.transaction.taxRelevant;
  }

  taxButtonState = () => {
    return this.props.taxButton;
  }

  toggleTax = () => {
    this.props.toggle(this.props.transaction);
  }

  // Need to make sure the || false below does not unsync database and switch status. It is only in place to remove an error arising in the console as 'on' is a required field in the imported Switch schema

  render() {
    return (
      <div>
        <Switch onClick={this.toggleTax} on={this.props.transaction && this.switchState() || this.props.taxButton && this.taxButtonState() || false } />
      </div>
    );
  }

}

export default ToggleSwitch;
