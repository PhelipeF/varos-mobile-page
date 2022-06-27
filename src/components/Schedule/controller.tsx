import * as css from './styles';
import { Schedules } from './config';

const assets = {
  leftarrow:'/assets/images/left-arrow.svg',
  rightarrow:'/assets/images/right-arrow.svg',
};

const ArrayController = ({current, __current}: {
  current: number, __current: React.Dispatch<number>
}): JSX.Element => {

  
  function next_stage(): void {
    if (current < Schedules.length - 1) {
      __current(current + 1);
    }
  };

  function previous_stage(): void {
    if (current > 0) {
      __current(current - 1);
    }
  };

  return (
    <css.PanelControl>

      <div>
        <button
          onClick={previous_stage}
        >
          <img src={assets.leftarrow} alt="controller to left" />
        </button>

        <button
          onClick={next_stage}
        >
          <img src={assets.rightarrow} alt="controller to right" />
        </button>
      </div>
    
    </css.PanelControl>
  )
};

export { ArrayController }