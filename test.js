var area = require('./area.js');

// Valid test
test('Valid test - getArea([3, 4])', () => {
	expect(area.getArea([3, 4])).toBe(12);
});

// Boundary test	
test('Boundary test 1 - getArea([-1, 4])', () => {
	expect(area.getArea([-1, 4])).toBe(-1);
});
test('Boundary test 2 - getArea([0, 4])', () => {
	expect(area.getArea([0, 4])).toBe(0);
});
test('Boundary test 3 - getArea([1, 4])', () => {
	expect(area.getArea([1, 4])).toBe(4);
});
test('Boundary test 4 - getArea([3, -1])', () => {
	expect(area.getArea([3, -1])).toBe(-1);
});
test('Boundary test 5 - getArea([3, 0])', () => {
	expect(area.getArea([3, 0])).toBe(0);
});
test('Boundary test 6 - getArea([3, 1])', () => {
	expect(area.getArea([3, 1])).toBe(3);
});

// Wrong test case
var a;
test('Wrong test case 1 - getArea(a) [a is only been declared]', () => {
	expect(area.getArea(a)).toBe(-1);
});
test('Wrong test case 2 - getArea(true)', () => {
	expect(area.getArea(true)).toBe(-1);
});
test('Wrong test case 3 - getArea([1, 2, 3])', () => {
	expect(area.getArea([1, 2, 3])).toBe(-1);
});
test('Wrong test case 4 - getArea([1])', () => {
	expect(area.getArea([1])).toBe(-1);
});
test('Wrong test case 5 - getArea([])', () => {
	expect(area.getArea([])).toBe(-1);
});
test('Wrong test case 6 - getArea([true, "3"])', () => {
	expect(area.getArea([true, "3"])).toBe(-1);
});
test('Wrong test case 7 - getArea([-2, -4])', () => {
	expect(area.getArea([-2, -4])).toBe(-1);
});