import React from 'react';
// import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'Funny foods',
    contests: this.props.initialContests
  };
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
  };
  componentDidMount(){
    //not needed since rendering servside
    // axios.get('/api/contests')
    // .then(resp => {
    //   this.setState({
    //     contests: resp.data.contests
    //   });
    // })
    // .catch(console.error);
  }
  // constructor(props){
  //   super(props);
  //   this.state = {test: 42};
  // }
  render(){
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList
         onContestClick={this.fetchContest}
         contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
