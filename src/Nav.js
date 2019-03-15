import React from 'react';
//The arrow functions are necessary so that the props are not evaluated until the user clicks either one.  Generally it is considered to be a bad practice to create a new function to pass into props

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav"> 
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <a onClick={()=>{onTabChange(0)}}>Items</a>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <a onClick={()=>{onTabChange(1)}}>Cart</a>
      </li>
    </ul>
  </nav>
);

/*Function components and classes that extend Component are not pure. They will always re-render, even if their props haven’t changed. If a class extends PureComponent instead, though, it is pure and it will skip re-rendering when its props are unchanged. Avoiding needless re-renders is the easiest way to improve performance in a React app.
 */
export default Nav;