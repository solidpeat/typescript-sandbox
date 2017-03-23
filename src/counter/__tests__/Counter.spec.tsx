import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';
import { CounterState } from '../module';

describe('Counter', () => {
  it('rendering', () => {
    const actions: any = {};
    const state: CounterState = { num: 1, loadingCount: 1 };
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    expect(wrapper.find('p').at(0).text()).toBe('Loading...');
    expect(wrapper.find('p').at(1).text()).toBe('score: 1');
  });

  it('click', () => {
    const actionSpy: any = { fetchAmount: null };
    spyOn(actionSpy, 'fetchAmount');
    const state: CounterState = { num: 0, loadingCount: 0 };
    const wrapper = shallow(<Counter value={state} actions={actionSpy} />);
    wrapper.find('button').at(2).simulate('click');
    expect(actionSpy.fetchAmount).toHaveBeenCalledWith();
  });
});
