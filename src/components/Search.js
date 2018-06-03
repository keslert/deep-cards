import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className="relative">
        <div className="absolute left-1" style={{top: '.8rem'}}>
          <img src="https://icon.now.sh/search/24/ccc" />
        </div>
        <input
          placeholder="type to filter by tags" 
          type="text"
          className="w-100 br-pill f5 pv3 pr4 bn bg-light-gray outline-0 gray"
          style={{paddingLeft: '3rem'}}

        />

      </div>
    )
  }
}
export default Search;