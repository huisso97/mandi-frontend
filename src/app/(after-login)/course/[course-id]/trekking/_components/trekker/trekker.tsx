import classNames from 'classnames/bind';

import Button from './button/button';
import styles from './trekker.module.scss';
import { TrekkerState } from '@/stores/trekker';

const cx = classNames.bind(styles);

const BLOCK = 'trekker';

interface TrekkingDataProps {
  title: string;
  content: string;
}
export const TrekkingData = ({ title, content }: TrekkingDataProps) => (
  <div className={cx('trekking_data')}>
    <div className={cx('trekking_data__title')}>{title}</div>
    <span className={cx('trekking_data__content')}>{content}</span>
  </div>
);

interface TrekkerProps {
  courseName: string;
  state: TrekkerState;
  time: number;
  distance: number;
  handleClickPlayAndPause: () => void;
  handleClickStop: () => void;
}
const Trekker = ({
  courseName,
  time,
  distance,
  state,
  handleClickPlayAndPause,
  handleClickStop,
}: TrekkerProps) => {
  return (
    <div className={cx(BLOCK)}>
      <h3 className={cx(`${BLOCK}__name`)}>{courseName}</h3>
      <div className={cx(`${BLOCK}__data`)}>
        <TrekkingData title='Time' content={formatTime(time)} />
        <div className={cx('divider')} />
        <TrekkingData title='Distance' content={formatDistance(distance)} />
      </div>
      <div className={cx(`${BLOCK}__buttons`)}>
        <Button
          type={state === 'Running' ? 'pause' : 'play'}
          onClick={handleClickPlayAndPause}
        />
        <Button type='stop' onClick={handleClickStop} />
      </div>
    </div>
  );
};

export default Trekker;

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const formatDistance = (distanceInMeters: number): string => {
  const distanceInKm = distanceInMeters / 1000;
  return `${distanceInKm.toFixed(2)} km`;
};
