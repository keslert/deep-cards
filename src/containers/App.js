import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import Downshift from 'downshift';

class App extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="w-100 min-vh-100 bg-near-white pa4">
        <div className="center" style={{maxWidth: 900}}>
          <div className="mb4">
            <Search 
              onChange={this.handleSearch} 
            />
          </div>
          <div className="flex flex-wrap justify-center">
            {cards.map((card, i) => (
              <div className="ma2" key={i}>
                <Card key={i} card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
