/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var store = require('../../stores/githubStore');
var actions = require('../../actions/githubActions');


var Button = require('react-bootstrap/src/Button');
var Modal = require('react-bootstrap/src/Modal');
var ModalTrigger = require('react-bootstrap/src/ModalTrigger');

var MyModal = React.createClass({
  render: function() {
    return (
        <Modal {...this.props} title="Modal heading" animation={true}>
          <div className="modal-body">
            <h4>Text in a modal abbb</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>TODO</p>

            <h4>Tooltips in a modal</h4>
            <p>TODO</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </div>
          <div className="modal-footer">
            <Button onClick={this.props.onRequestHide}>Close</Button>
          </div>
        </Modal>
      );
  }
});


var SearchInput = React.createClass({
  handleSearch(event) {
    actions.searchUser(this.refs.searchInput.getDOMNode().value);
  },
  render() {
    return (
      <div className='dashboard'>
       <ModalTrigger modal={<MyModal/>}>
         <Button bsStyle="primary" bsSize="large">Launch demo modal</Button>
       </ModalTrigger>

        <Button bsStyle="primary">Primary</Button>

        <div className="ui action input">
          <form onSubmit={this.handleSearch}>
            <input type="text" ref="searchInput" placeholder="Search Github User Profiles..."/>
            <div className="ui button" onClick={this.handleSearch}>Search</div>
          </form>
        </div>
        <SearchResults/>
      </div>
    )
  }
});

var SearchResults = React.createClass({
  mixins: [Reflux.connect(store,"searchResults")],
  getInitialState() {
    return {
      searchResults: {
        repos: [],
        user: {}
      }
    };
  },
  render() {
    var results;
    if(this.state.searchResults && this.state.searchResults.user) {
      results = (
        <div className="result">
          <UserInfo name={this.state.searchResults.user.login} imgSrc={this.state.searchResults.user.avatar_url} />
          <div className="repo-list">
            <ul>
              {this.state.searchResults && this.state.searchResults.repos && this.state.searchResults.repos.map((repo) => {
                return <li key={repo.id}>{repo.name}</li>
              })}
            </ul>

          </div>
        </div>
      )
    } else {
      results = <h1>No results match your query.</h1>
    }
    return (
      <div className='search-results'>
        {results}
      </div>
    )
  }
});

var UserInfo = React.createClass({
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <br/>
        <img id="gravitar-image" src={this.props.imgSrc}/>
      </div>
    );
  }
});

module.exports = SearchInput;


