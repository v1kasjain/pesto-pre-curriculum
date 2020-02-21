const { calc } = require('./index');
const describe = (desc, fn) => {
  console.log(desc);
  fn()
};
const it = (msg, fn) => describe('  ' + msg, fn);
const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass');
      return true;
    } else {
      console.log('fail');
      return false;
    }
  },
  notToBe: (assertion) => {
    if (exp !== assertion) {
      console.log('pass');
      return true;
    } else {
      console.log('fail');
      return false;
    }
  }
});
const expect = (exp) => matchers(exp);

describe('Performing calculations', () => {

  it('add two numbers', () => {
    const result = calc.add(1, 2);
    expect(result).toBe(3);
    expect(result).notToBe(12);
  });

  it('subtract two numbers', () => {
    const result = calc.subtract(2, 1);
    expect(result).toBe(1);
    expect(result).notToBe(21);
  });

  it('multiply two numbers', () => {
    const result = calc.multiply(1, 2);
    expect(result).toBe(2);
    expect(result).notToBe(12);
  });

  it('divide two numbers', () => {
    const result = calc.divide(2, 1);
    expect(result).toBe(2);
    expect(result).notToBe(21);
  });

});
