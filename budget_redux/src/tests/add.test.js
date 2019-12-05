const add = ( a, b, c) => {
    return a+b+c;
};

const generateGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
}
test ('should add three numbers', () => {
    const result = add(5, 7, 8);
    expect(result).toBe(20);
});

test ('should generate greeting from name', () => {
    const result = generateGreeting('Atem');
    expect(result).toBe('Hello Atem!')
})