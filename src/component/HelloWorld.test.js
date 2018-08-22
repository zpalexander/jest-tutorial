import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('should render in a div', () => {
    /**
     * Stuck? Check this out:
     * https://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html
     */
     const wrapper = shallow(<HelloWorld />);
     expect(wrapper.type()).toEqual('div');
  });

  it('should have a class name hello-world', () => {
    /**
     * Stuck? Check this out:
     * https://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html
     */

     const wrapper = shallow(<HelloWorld />);
     expect(wrapper.prop('className')).toEqual('hello-world');
  });

  it('should contain the text "Hello World" when no name prop is specified', () => {
    /**
     * Stuck? Check this out:
     * https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html
     */

     const wrapper = shallow(<HelloWorld />);
     expect(wrapper.text()).toEqual('Hello World');
  });

  it('should contain the text "Hello " followed by the value of the name prop passed', () => {
    const wrapper = shallow(<HelloWorld name="Jason" />);
    expect(wrapper.text()).toEqual('Hello Jason');
  });
});
