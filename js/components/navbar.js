import $ from 'jquery';
import canMap from 'can-define/map/';
import canComponent from 'can-component';

import NavbarView from 'js/views/components/navbar.stache';
import {AppViewModel, setAppPage} from 'js/view-models/app';

const NavbarViewModel = canMap.extend({
    currentPage: "string",
    associatedViewModel: AppViewModel,
    setPage: function(pageName) {
	this.currentPage = pageName;
    }
});

canComponent.extend({
    tag: "navigation-bar",
    view: NavbarView,
    ViewModel: NavbarViewModel,
    events: {
    }
});
