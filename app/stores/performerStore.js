var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/appDispatcher');
var _ = require('lodash');

var appConstants = require('../constants/appConstants');

var ActionTypes = appConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _performers = [];
var _searchKey = '';

var _selectedPerformer = {};


var PerformerStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(performerId) {
    return _.where(_performers, {id : performerId});
  },

  getCurrentPerformers: function() {
    return _performers;
  },
  getSelectedPerformer: function(){
    return _selectedPerformer
  },
  getSearchKey: function() {
    return _searchKey;
  }

});

PerformerStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_PERFORMERS:
      _performers = action.performers;
      _searchKey = action.searchKey
      PerformerStore.emitChange();
      break;
    case ActionTypes.RECEIVE_PERFORMER_BY_ID:
      _selectedPerformer = action.performer;
      PerformerStore.emitChange();
      break;
    default:
      // do nothing
  }

});

module.exports = PerformerStore;