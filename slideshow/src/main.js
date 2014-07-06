define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');

  // import Utility
  var Utility = require('famous/utilities/Utility');

  var AppView = require('views/AppView');

  // import SlideData
  var SlideData = require('data/SlideData');

  var mainContext = Engine.createContext();
  mainContext.setPerspective(1000);
  
  // simple Get request to the picasa api with callback
  Utility.loadURL(SlideData.getUrl(), initApp);

  function initApp(data) {
    // parses out response data and retries array of urls
    data = SlideData.parse(data);

    // instantiates AppView with our url data
    var appView = new AppView({ data: data });

    mainContext.add(appView);
  }
});