import $ from 'jquery';
import canMap from 'can-define/map/';
import canCompute from 'can-compute';

import HomeView from 'js/views/home.stache';
import UnknownView from 'js/views/unknown.stache';

const AppViewModel = canMap.extend("AppViewModel", {
    appName: "string",
    description: "string",
    page: "string",
    pageContent: canCompute,
    updatePage: function(pageName) {
	if (pageName === 'home') {
	    this.page = pageName;
	    pageContent = HomeView();
	} else {
	    this.page = pageName;
	    pageContent = UnknownView();
	}
    }
});


export default AppViewModel;
