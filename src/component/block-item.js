import React, { Component } from 'react';

import './_block-item.scss';

class BlockItem extends Component {
  render() {
    return (
      <li>
        <div className="cube">
          <div className="cube__side cube__side_back" />
          <div className="cube__side cube__side_left" />
          <div className="cube__side cube__side_right" />
          <div className="cube__side cube__side_top" />
          <div className="cube__side cube__side_bottom" />
          <div className="cube__side cube__side_front" />
        </div>
        <div>
          <p> Test Content Here</p>
        </div>
      </li>

    );
  }
}

export default BlockItem;
/*

*/
