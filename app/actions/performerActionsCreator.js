var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');

var ActionTypes = appConstants.ActionTypes;

module.exports = {

  receivePerformers: function(searchKey, performers) {
    appDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PERFORMERS,
      performers: performers,
      searchKey: searchKey,
    });
  },
  getPerformer: function(performer) {
    appDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_PERFORMER_BY_ID,
      performer: performer,
    });
  },
};