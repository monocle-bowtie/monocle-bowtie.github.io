define(['angularAMD', 
		'angular-route', 
		'angular-cookies',
		'angular-resource',
		'angular-mocks',
		'jquery',
		'jquery-fittext',
		'jquery-ui', 
		'bootstrap',
		'metisMenu',
		'datepicker'], 
		function (angularAMD, anguarRoute, angularCookies, angularResource, angularMocks, $, jqueryFittext, jqueryUi, bootstrap) {
		    
		    var app = angular.module("webapp", ['ngRoute','angular-cookies', 'ngResource']);

		    app.config(function ($routeProvider, $provide) {

		    	//Configuracion para que levanten los servicios
		    	app.factory    = $provide.factory;

		        $routeProvider.when("/", angularAMD.route({
		            templateUrl: 'app/views/landing-page.html', controller: 'LandingCtrl',
		            controllerUrl: '../app/controllers/landing.controller'
		        }));

		        $routeProvider.when("/login", angularAMD.route({
		            templateUrl: 'app/views/login-view.html', controller: 'LoginCtrl',
		            controllerUrl: '../app/controllers/login.controller'
		        }));

		        $routeProvider.when("/home", angularAMD.route({
		            templateUrl: 'app/views/home-view.html', controller: 'HomeCtrl',
		            controllerUrl: '../app/controllers/home.controller'
		        }));

		        $routeProvider.when("/ventas", angularAMD.route({
		            templateUrl: 'app/views/ventas-view.html', controller: 'VentasCtrl',
		            controllerUrl: '../app/controllers/ventas.controller'
		        }));

		        $routeProvider.when("/compras", angularAMD.route({
		            templateUrl: 'app/views/compras-view.html', controller: 'ComprasCtrl',
		            controllerUrl: '../app/controllers/compras.controller'
		        }));

		        $routeProvider.when("/proveedores", angularAMD.route({
		            templateUrl: 'app/views/proveedores-view.html', controller: 'ProveedoresCtrl',
		            controllerUrl: '../app/controllers/proveedores.controller'
		        }));

		         $routeProvider.when("/clientes", angularAMD.route({
		            templateUrl: 'app/views/clientes-view.html', controller: 'ClientesCtrl',
		            controllerUrl: '../app/controllers/clientes.controller'
		        }));

		        $routeProvider.when("/stock", angularAMD.route({
		            templateUrl: 'app/views/stock-view.html', controller: 'StockCtrl',
		            controllerUrl: '../app/controllers/stock.controller'
		        }));

		        $routeProvider.when("/precios-config", angularAMD.route({
		            templateUrl: 'app/views/precios-config-view.html', controller: 'PreciosConfigCtrl',
		            controllerUrl: '../app/controllers/precios.config.controller'
		        }));
		    });
		      
		    return angularAMD.bootstrap(app);
		});