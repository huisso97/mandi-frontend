interface StarProps {
  type: 'filled' | 'half' | 'empty';
  backgroundColor?: string;
  fillColor?: string;
  size?: number;
}

const Star = ({
  type,
  size = 14,
  backgroundColor = '#D1D3D8',
  fillColor = '#FFCD00',
}: StarProps) => {
  const percent = type === 'filled' ? 1 : type === 'half' ? 0.5 : 0;
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient
          id={`partialFill-${percent}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset={`${percent * 100}%`} stopColor={fillColor} />
          <stop offset={`${percent * 100}%`} stopColor={backgroundColor} />
        </linearGradient>
      </defs>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.7881 3.21069C11.2365 2.13274 12.7635 2.13274 13.2119 3.21069L15.2938 8.2164L20.6979 8.64965C21.8617 8.74294 22.3336 10.1952 21.4469 10.9547L17.3296 14.4817L18.5875 19.7552C18.8584 20.8908 17.623 21.7883 16.6267 21.1798L12 18.3538L7.37335 21.1798C6.37703 21.7883 5.14163 20.8908 5.41252 19.7552L6.67043 14.4817L2.55309 10.9547C1.66645 10.1952 2.13832 8.74294 3.30206 8.64965L8.70615 8.2164L10.7881 3.21069Z'
        fill={`url(#partialFill-${percent})`}
      />
    </svg>
  );
};

export default Star;
