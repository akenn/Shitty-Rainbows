define(function() {
	_.extend(Backbone.Router.prototype, Backbone.Events, {
		before: {},
		after: {},
		_runFilters: function(filters, fragment, args) {
			if (_.isEmpty(filters)) {
				return true;
			}
			return _.find(filters, function(func, filterRoute) {
        filterRoute = new RegExp(filterRoute);
				if (filterRoute.test(fragment)) {
					return (_.isFunction(func) ? func.apply(this, args) : this[func].apply(this, args));
				}
				return false;
			}, this);
		},
		route: function(route, name, callback) {
			if (!_.isRegExp(route)) route = this._routeToRegExp(route);
			if (_.isFunction(name)) {
				callback = name;
				name = '';
			}
			if (!callback) callback = this[name];
			Backbone.history.route(route, _.bind(function(fragment) {
				var args = this._extractParameters(route, fragment);
				if (this._runFilters(this.before, fragment, args)) {
					callback && callback.apply(this, args)
					this._runFilters(this.after, fragment, args);
					this.trigger.apply(this, ['route:' + name].concat(args));
				}
			}, this));
		}
	});
});
