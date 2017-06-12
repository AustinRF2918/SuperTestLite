import $ from 'jquery';
import canMap from 'can-define/map/';
import canCompute from 'can-compute';

import TestScenarioViewModel from 'js/view-models/test-scenario';
import AppViewModel from 'js/view-models/app';

import AppView from 'js/views/app.stache';

import ScenariosView from 'js/views/collections/scenarios.stache';
import StepsView from 'js/views/collections/steps.stache';
import FeaturesView from 'js/views/collections/features.stache';

import HomeView from 'js/views/home.stache';
import UnknownView from 'js/views/unknown.stache';

import Navbar from 'js/components/navbar';

import "../css/app.css";

const appViewModel = window.appVM = new AppViewModel({
    appName: "TodoMVC",
    description: "The todo mvc app!",
    page: canCompute("home", {
	set: function(newPage) {
	    this.updatePage(newPage);
	}
    }),
    pageContent: HomeView()
});

const frag = AppView(appViewModel);

document.body.appendChild(frag);

