import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';

function ItemPage({ items }) {
  return (
    <ul className='ItemPage-items'>
      {items.map(item => 
      <li className='ItemPage-item' key={item.id}>
        {item.name}
      </li>
      )}
    </ul>
  );
}
ItemPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemPage;

