const p = document.createElement('p');
p.innerHTML = 'test testHTMLobj';
const htmlNode = document.createElement('div').appendChild(p);

export default {
	dataValue: {
		UUID: '1',
		testFunction: function() {
			console.log('fun');
		},
		testArrayFunction: () => {},
		testExp: /i/g,
		testdate: new Date(),
		testArray: [
			{
				name: 'testArray first',
				value: 1
			},
			{
				name: 'testArray first',
				value: 1
			}
		],
		nan: NaN,
		infinity: Infinity,
		testHTMLobj: document.createElement('div').appendChild(htmlNode)
	},
	statusValue: {}
};
