import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Title, Completed, Icon } from './header.styles';

const Header = ({ tasks }) => {
  const { isCompleteTotal, tasksTotal } = tasks;

  let percentage = (isCompleteTotal / tasksTotal) * 100;

  return (
    <Navbar>
      <Title>Activity 01:</Title>
      <Completed opacity={percentage === 100 ? 1 : 0}>Completed</Completed>
      <Icon className='fas fa-ellipsis-h' />
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Header);
