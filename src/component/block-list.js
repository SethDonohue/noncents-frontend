// Components used here:
// block-item

import React, { Component } from 'react';
import BlockItem from './block-item';

// import './_block-item.scss';

class BlockList extends Component {
  render() {
    return (
      <ul>
        <BlockItem />
        <BlockItem />
        <BlockItem />
      </ul>
    );
  }
}

export default BlockList;
/*

*/
