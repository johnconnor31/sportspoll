import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { shallow } from 'enzyme';
import PollComponent, { rearrangePollData, getRandomPoll } from './PollComponent';

describe('Poll component', () => {
  it('rearrange poll data',() => {
    const allSports = [];
    const result = rearrangePollData([{
      'sport': 'Football',
      'Home': 'abc'
    },{
      'sport': 'Tennis',
      'Home': 'def'
    }]);
    expect(result).toHaveLength(2);
  });  
  it('Poll data component renders with selection buttons', () => {
    const wrapper = shallow(<PollComponent />);
    expect(wrapper.find('.pollSport')).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(3);
  });
  it('Voting on a poll reflects in poll history', () => {
    const wrapper = shallow(<PollComponent />);
    wrapper.find(Button).at(0).simulate('click');
    expect(wrapper.find('.pollHistory').text()).toEqual('You have voted: Home');
  });
});

