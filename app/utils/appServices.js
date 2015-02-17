
var PerformerActionsCreator = require('../actions/performerActionsCreator');

// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.

module.exports = {

  getPerformers: function(key) {
    var performerService = require('../data');

    performerService.findByName(key).done(function(result) {
      PerformerActionsCreator.receivePerformers(key, result);
    }).fail(function(){
      console.error('fail')
    });
  },

  getPerformer: function(id){
    var performerService = require('../data');

    performerService.findById(id).done(function(result) {
      PerformerActionsCreator.getPerformer(result);
    }).fail(function(){
      console.error('fail')
    });
  }
};
