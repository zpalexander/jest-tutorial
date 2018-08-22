import dependency from './dependency';
import main from './main';

jest.mock('./dependency');

/**
 * Stuck? Check this out:
 * https://jestjs.io/docs/en/mock-functions#mock-return-values
 */

describe('main', () => {
  it('should call dependency once when invoked', () => {
    main();
    expect(dependency).toHaveBeenCalled();
  });

  it('should return the result of dependency multiplied by two', () => {
    dependency.mockReturnValueOnce(4);
    expect(main(0, 0)).toEqual(8);
  });
});
