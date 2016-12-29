import React from 'react';
// import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    contests: this.props.initialContests
  };
  fetchContest = (contestId) => {
    pushState(
      {currentContentId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContentId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };
  currentContest(){
    return this.state.contests[this.state.currentContentId];
  }
  pageHeader(){
    if(this.state.currentContentId){
      return this.currentContest().contestName;
    }
    return 'Default TITLE :O';
  }
  currentContent(){
    if (this.state.currentContentId) {
      return <Contest {...this.currentContest()} />;
    }
    return <ContestList
     onContestClick={this.fetchContest}
     contests={this.state.contests} />;
  }
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
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
