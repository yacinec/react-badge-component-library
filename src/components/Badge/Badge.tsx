import React from 'react';
import './Badge.css';

interface BadgeProps {
  text: string;
  number: number;
  color?: string;
}

const Badge = (props: BadgeProps) => {
  return (
    <div
      className='react-badge'
      style={props.color ? { background: props.color } : {}}
    >
      {props.text}
      {props.number === 0 ? (
        <></>
      ) : (
        <div className='floating-number'>{props.number}</div>
      )}
    </div>
  );
};

export default Badge;
