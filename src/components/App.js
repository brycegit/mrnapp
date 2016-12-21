import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Funny foods'
  };
  // constructor(props){
  //   super(props);
  //   this.state = {test: 42};
  // }
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
        ...
        </div>
      </div>
    );
  }
}

export default App;
