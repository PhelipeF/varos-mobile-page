import * as css from './styles';
import { Schedules } from './config';
import { v4 as uuid } from 'uuid';
const icon = '/assets/images/Livros.svg'

const ClassSchedule = ({current}: {current: number}): JSX.Element => {

  return (
    <css.Class>
      { !!Schedules[current] &&
        <div>

          <css.ClassID>
            {
              Schedules[current].id < 10 ? `0${Schedules[current].id}` : 
              Schedules[current].id
            }
          </css.ClassID>

            <section>

              <h2>{Schedules[current].title}</h2>

              <p>{Schedules[current].content}</p>
            
            </section>

          <css.ClassTiming>
            <img src={icon} />
            <p>
              {Schedules[current].estimed.name}
              <span> - {Schedules[current].estimed.time}</span>
            </p>
          </css.ClassTiming>
            
          <ul>
            { Schedules[current].modules.map(classModule => 
              <li key={classModule.id + '_' + uuid()}>

                <div className="class-ul-li-id">
                  { classModule.id < 10 ? `0${classModule.id}` : 
                classModule.id }
                </div>

                <div className="class-ul-li-title">{ classModule.title }</div>

                <div className="class-ul-li-time">{ classModule.time }</div>

              </li>
              ) }
          </ul>
        
        </div>
      }
    </css.Class>
  )

};

export { ClassSchedule }