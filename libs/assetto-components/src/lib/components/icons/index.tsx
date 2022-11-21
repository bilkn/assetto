import React from 'react';

interface iIconProps {
  size?: number;
  color?: React.CSSProperties['color'];
}

// eslint-disable-next-line import/prefer-default-export
export function CustomChevronIcon({ size = 16, color = '#000' }: iIconProps) {
  return (
    <svg width={size} height={size} viewBox={'0 0 16 16 '} fill="none">
      <path
        d="M2.66667 6L8.00001 11.3333L13.3333 6"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function CustomTickIcon({ size = 24, color = '#000' }: iIconProps) {
  return (
    <svg width={size} height={size} viewBox={'0 0 24 24'} fill="none">
      <path
        d="M4.125 13.125L9.375 18.375L19.875 7.125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function CustomThreeDotsIcon({ size = 25, color = '#000' }: iIconProps) {
  return (
    <svg width={size} height={size / 5} viewBox="0 0 25 5" fill="none">
      <circle cx="22.5" cy="2.5" r="2.5" fill={color} />
      <circle cx="12.5" cy="2.5" r="2.5" fill={color} />
      <circle cx="2.5" cy="2.5" r="2.5" fill={color} />
    </svg>
  );
}
