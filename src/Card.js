import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {
  static propTypes = {
    card: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }),
  };

  render() {
    return (
      <div>
        Value: { this.props.card && this.props.card.value }
      </div>
    );
  }
}

export default Card;
