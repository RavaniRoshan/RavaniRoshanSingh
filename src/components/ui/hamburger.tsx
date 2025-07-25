import type { FC } from 'react';

interface HamburgerProps {
  isOpen: boolean;
}

export const Hamburger: FC<HamburgerProps> = ({ isOpen }) => {
  return (
    <svg
      className={`ham hamRotate ham1 ${isOpen ? 'active' : ''}`}
      viewBox="0 0 100 100"
      width="80"
    >
      <path
        className="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-11.958003 -6.875401,0 -16.89244,5.173284 -16.89244,16.368047"
      />
      <path className="line middle" d="m 30,50 h 40" />
      <path
        className="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,10.994014 -18.499247,21.751381"
      />
    </svg>
  );
};

export default Hamburger;
