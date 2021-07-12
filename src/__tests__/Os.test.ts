import {Os} from '../Os'


test("Os", () => {
    expect(typeof Os.getBrowser()).toBe('string');
});
