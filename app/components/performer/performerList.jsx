var React = require('react');
var PerformerStore = require('../../stores/performerStore');

var SearchBar = React.createClass({
    searchHandler: function() {
        this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
    },
    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this.searchHandler} value={this.props.searchKey}/>
            </div>
        );
    }
});

var PerformerList = React.createClass({
    render: function () {
        var items = this.props.performers.map(function (performer) {
            return (
                <PerformerListItem key={performer.id} performer={performer} />
            );
        });
        return (
            <ul className="table-view">
                {items}
            </ul>
        );
    }
});

var PerformerListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#performers/" + this.props.performer.id}>
                    <img className="media-object small pull-left" src={"pics/" + this.props.performer.firstName + "_" + this.props.performer.lastName + ".jpg" }/>
                    {this.props.performer.firstName} {this.props.performer.lastName}
                    <p><label>Grade:</label> {this.props.performer.grade}</p>
                </a>
            </li>
        );
    }
});


function getStateFromStores() {
    return {
        searchKey: PerformerStore.getSearchKey(),
        performers: PerformerStore.getCurrentPerformers(),
    }
}

var PerformerListContent = React.createClass({
    componentDidMount: function() {
      PerformerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      PerformerStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState(getStateFromStores());
    },
    getInitialState: function() {
        return getStateFromStores();
    },
    searchHandler:function(key) {
        this.props.service.getPerformers(key);
    },
    render: function () {
        return (
            <div>
                <SearchBar searchKey={this.state.searchKey}  searchHandler={this.searchHandler}/>
                <div className="content">
                   <PerformerList performers={this.state.performers}/>
                </div>
            </div>
        );
    }
});


module.exports = PerformerListContent;
// React.render(
//     <BaseLayout />,
//     document.body
// );