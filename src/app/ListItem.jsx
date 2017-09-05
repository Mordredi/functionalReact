import React from 'react';
import PropTypes from 'prop-types';

import style from '../index.scss';

export const ListItem = ({ name, completed }) => <li key={name} className={completed ? style.completed : null}>{name}</li>;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
