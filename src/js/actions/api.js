import { BrowserRouter as Router, Route } from 'react-router-dom';

export function apiError(err) {
  return dispatch => {
    if (err.status === 401) {
      dispatch(BrowserRouter('/login'));
    }
  };
}
