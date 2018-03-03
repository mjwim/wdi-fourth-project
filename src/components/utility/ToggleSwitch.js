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

  render() {
    return (
      <div>
        <Switch onClick={this.toggleTax} on={this.props.transaction && this.switchState() || this.props.taxButton && this.taxButtonState() } />
      </div>
    );
  }

}

export default ToggleSwitch;
