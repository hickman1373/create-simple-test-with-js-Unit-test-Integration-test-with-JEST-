const { generateText, checkAndGenerate } = require('./util');

test('output is title and price', () => {
    const text = generateText('Book', 29);
    expect(text).toBe('Book 29');   
})

test('check and generate Input', () => {
    const text = checkAndGenerate('Book', 7000);
    expect(text).toBe('Book 7000');
})