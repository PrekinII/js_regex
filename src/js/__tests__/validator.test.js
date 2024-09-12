import { Validator } from '../validator';

test("testing validateUsername", () => {
    const validator = new Validator();
    let nameStr = "g12adminnetolodyru"
    const result = validator.validateUsername(nameStr)
    const expected = "Все ок";
    expect(result).toEqual(expected);
});

test("testing validateUsername1", () => {
    const validator = new Validator();
    let nameStr = "1g12adminnetolodyru"
    const result = validator.validateUsername(nameStr)
    const expected = "Недопустимое имя";
    expect(result).toEqual(expected);
});

test("testing validateUsername2", () => {
    const validator = new Validator();
    let nameStr = "g12adminnetolodyru_"
    const result = validator.validateUsername(nameStr)
    const expected = "Недопустимое имя";
    expect(result).toEqual(expected);
});

test("testing validateUsername3", () => {
    const validator = new Validator();
    let nameStr = "1g777adminnetolodyru"
    const result = validator.validateUsername(nameStr)
    const expected = "Недопустимое имя";
    expect(result).toEqual(expected);
});

test("testing validateUsername4", () => {
    const validator = new Validator();
    let nameStr = "***"
    const result = validator.validateUsername(nameStr)
    const expected = "Недопустимое имя";
    expect(result).toEqual(expected);
});