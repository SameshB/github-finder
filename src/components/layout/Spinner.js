// rce: react (class based) component that exports at last
// racf: react arrow function based component
import React, { Fragment } from 'react';
import spinner from './loading.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ margin: 'auto', width: '300px', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
