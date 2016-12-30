import React from 'react';
// import axios from 'axios';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  state = this.props.initialData;
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };
  fetchContestList = () => {
    pushState(
      {currentContestId: null},
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
    return 'Default TITLE :O';
  }
  currentContent(){
    if (this.state.currentContestId) {
      return <Contest
                contestListClick={this.fetchContestList}
                {...this.currentContest()} />;
    }
    Object.keys(this.state.contests).length <= 1 ? this.fetchContestList() : null;
    return <ContestList
     onContestClick={this.fetchContest}
     contests={this.state.contests} />;
  }
  componentDidMount(){
    onPopState((event) => {
      this.setState({currentContestId: event.state.currentContestId || null});
    });
    //not needed since rendering servside
    // axios.get('/api/contests')
    // .then(resp => {
    //   this.setState({
    //     contests: resp.data.contests
    //   });
    // })
    // .catch(console.error);
  }
  componentWillUnmount(){
    onPopState(null);
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
