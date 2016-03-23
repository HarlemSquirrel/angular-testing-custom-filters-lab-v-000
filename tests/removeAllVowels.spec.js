describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all the vowels from a string', function () {
		expect(removeAllVowels('Panda')).toEqual('Pnd');
		expect(removeAllVowels('food')).toEqual('fd');
		expect(removeAllVowels('This thing works!')).toEqual('Ths thng wrks!');
	});
});
