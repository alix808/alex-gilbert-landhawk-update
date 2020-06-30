import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Name,
  Description,
  Date,
  Time,
  Icon,
  Line,
} from './task.styles';
import moment from 'moment';

const grey = 'rgba(180, 180, 180, 1)';
const yellow = '#FFBE22';

const Task = ({ name, description, date, isComplete }) => {
  let m = moment(date, 'YYYY-MM-DD');

  let formattedDate = m.format('MMM Do YYYY');

  let formattedTime = m.format('LT');

  return (
    <Container>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Date>{formattedDate}</Date>
      <Time>{formattedTime}</Time>
      <Icon
        className='fas fa-check-circle'
        style={{ color: isComplete ? yellow : grey }}
      ></Icon>
      <Line background={isComplete ? yellow : grey} />
    </Container>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
