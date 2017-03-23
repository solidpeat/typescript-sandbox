import * as React from 'react';

export interface Props {
  content: string;
}

export default (props: Props) => (
  <h1>{props.content}</h1>
);
