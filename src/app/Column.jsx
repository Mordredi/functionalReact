import React from 'react';
import { curry } from 'ramda';

export const Column = curry(
  (header, children) => (
    <section>
      <h1>{header}</h1>
      {children}
    </section>
  ),
);
