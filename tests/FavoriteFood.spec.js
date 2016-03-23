describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		filterFF = $filter('favoriteFood');
	}));

	it('should filter objects by favoriteFood', function () {
		var people = [
			{name: 'Jose', favoriteFood: 'pizza'},
			{name: 'Sally', favoriteFood: 'ice cream'}
		];

		expect(filterFF(people, 'pizza')).toEqual([people[0]]);
		expect(filterFF(people, 'ice cream')).toEqual([people[1]]);
		expect(filterFF(people, 'soda')).toEqual([]);
	});
});
