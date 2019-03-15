import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

class App extends React.Component {
  state = { //App will keep track of which tab is currently active 
    activeTab: 0  
  };

  handleTabChange = (index) => {  //handleTabChange is passed down into Nav along with activeTab  so it can render correctly
    this.setState({
      activeTab: index
    });;
  }

  renderContent() {
    switch(this.state.activeTab) {  //switch value evaluates to 0 or 1
      default:
      case 0: return <ItemPage items={items}/>;
      case 1: return <span>Cart</span>;
    }
  }

  render() {
    let {activeTab} = this.state;
    return(
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}
export default App;