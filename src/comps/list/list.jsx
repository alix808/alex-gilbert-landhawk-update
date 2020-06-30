import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from '../task/task';
import { countTasks, countIsComplete } from '../../redux/tasks/tasks.actions';
import { Scroll } from './list.styles';
import { StyledSpinner } from '../spinner/spinner.styled';

const List = ({ tasks, countTasks, countIsComplete }) => {
  const { array, loading } = tasks;

  useEffect(() => {
    countTasks(array);
    countIsComplete(array);

    // eslint-disable-next-line
  }, [array]);

  return (
    <Scroll justify={loading ? 'center' : 'flex-start'}>
      {loading ? (
        <StyledSpinner />
      ) : (
        array.map((t) => (
          <Task
            key={t.name}
            name={t.name}
            description={t.description}
            date={t.date}
            isComplete={t.isComplete}
          ></Task>
        ))
      )}
    </Scroll>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { countTasks, countIsComplete })(List);
