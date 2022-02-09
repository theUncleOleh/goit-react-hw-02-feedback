import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div>
      <span>{message}</span>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
