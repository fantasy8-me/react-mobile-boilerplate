var React = require('react');
var PerformerStore = require('../../stores/performerStore');

function getStateFromStores() {
    return {
        performer: PerformerStore.getSelectedPerformer(),
    }
}

var Performer = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },
    componentDidMount: function() {
      PerformerStore.addChangeListener(this._onChange);
      this.props.service.getPerformer(this.props.performerId);
    },
    componentWillUnmount: function() {
      PerformerStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState(getStateFromStores());
    },
    render: function () {
        return (
            <div className="card">
                <ul className="table-view">
                    <li className="table-view-cell media">
                        <img className="media-object big pull-left" src={"pics/" + this.state.performer.firstName + "_" + this.state.performer.lastName + ".jpg" }/>
                        <h1>{this.state.performer.firstName} {this.state.performer.lastName}</h1>
                        <p>{this.state.performer.title}</p>
                    </li>
                    <li className="table-view-cell media">
                        <a href={"tel:" + this.state.performer.officePhone} className="push-right">
                            <span className="media-object pull-left icon icon-call"></span>
                            <div className="media-body">
                            Call Office
                                <p>{this.state.performer.officePhone}</p>
                            </div>
                        </a>
                    </li>
                    <li className="table-view-cell media">
                        <a href={"tel:" + this.state.performer.mobilePhone} className="push-right">
                            <span className="media-object pull-left icon icon-call"></span>
                            <div className="media-body">
                            Call Mobile
                                <p>{this.state.performer.mobilePhone}</p>
                            </div>
                        </a>
                    </li>
                    <li className="table-view-cell media">
                        <a href={"sms:" + this.state.performer.mobilePhone} className="push-right">
                            <span className="media-object pull-left icon icon-sms"></span>
                            <div className="media-body">
                            SMS
                                <p>{this.state.performer.mobilePhone}</p>
                            </div>
                        </a>
                    </li>
                    <li className="table-view-cell media">
                        <a href={"mailto:" + this.state.performer.email} className="push-right">
                            <span className="media-object pull-left icon icon-email"></span>
                            <div className="media-body">
                            Email
                                <p>{this.state.performer.email}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Performer;