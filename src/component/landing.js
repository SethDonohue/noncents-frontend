// Components used here:
// chain, previous-block-info, last-block-info, block-list, block-item

import React, { Component } from 'react';
import BlockList from './block-list';

// import './_block-item.scss';

class Landing extends Component {
  render() {
    return (
      <BlockList />
    );
  }
}

export default Landing;
