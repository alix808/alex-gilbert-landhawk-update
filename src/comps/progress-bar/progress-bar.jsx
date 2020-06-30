import React from 'react';
import { connect } from 'react-redux';

import { Progress, Title } from './progress-bar.styles';

const ProgressBar = ({ tasks }) => {
  const { isCompleteTotal, tasksTotal } = tasks;

  let percentage = (isCompleteTotal / tasksTotal) * 100;

  return (
    <div>
      <Title>Progress ({percentage}%)</Title>
      <Progress max='100' value={percentage.toString()}></Progress>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(ProgressBar);
