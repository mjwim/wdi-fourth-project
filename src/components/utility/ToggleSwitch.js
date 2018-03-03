import React, {Component} from 'react';
import Switch from 'react-toggle-switch';

class ToggleSwitch extends Component {

  switchState = () => {
    return this.props.transaction.taxRelevant;
  }

  toggleTax = () => {
    this.props.toggle(this.props.transaction);
    this.setState({ switched: this.props.transaction.taxRelevant });
  }

  render() {
    return (
      <div>
        <Switch onClick={this.toggleTax} on={this.props.transaction && this.switchState()} />
      </div>
    );
  }

}

export default ToggleSwitch;
