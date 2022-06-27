import * as css from './styles';
import { useState } from 'react';
import { ArrayController } from './controller';
import { ClassSchedule } from './class';


const Schedule = (): JSX.Element => {
  const [current, __current] = useState(1);

  return (
    <css.Container>
      <ClassSchedule current={current} />
      <ArrayController current={current} __current={__current} />
    </css.Container>
  )
};

export { Schedule }