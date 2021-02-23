import { Formik } from 'formik';
import { Unit } from './store/types';

type AttackFormProps = {
  units: Array<Unit>,
  Submited: CallableFunction
}

export type AttactFormTypes = {
  defender_coords: string; 
  attack_datetime: string; 
  defender_slowest_unit: Unit|null;
  nearest_babarian_village_coords: string;
  support_max_time: number;
  world: string;
}

const AttackForm = ({ units, Submited }: AttackFormProps) => {
    const initialValues: AttactFormTypes = { 
      defender_coords: '', 
      attack_datetime: '', 
      defender_slowest_unit: null, 
      nearest_babarian_village_coords: '',  
      support_max_time: 5,
      world: ''
    };

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            Submited(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="f-group">
              <label htmlFor="world">World</label>
              <input
                type="text"
                name="world"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.world}
                placeholder="pt77"
              />
            </div>
            <div className="f-group">
              <label htmlFor="defender_coords">Defender Coordenates</label>
              <input
                type="text"
                name="defender_coords"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.defender_coords}
                placeholder="453|347"
              />
            </div>
            <div className="f-group">
              <label htmlFor="nearest_babarian_village_coords">Nearest Barbarian Village Coordenates</label>
              <input
                type="text"
                name="nearest_babarian_village_coords"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nearest_babarian_village_coords}
                placeholder="452|349"
              />
            </div>
            <div className="f-group">
              <label htmlFor="attack_datetime">Attack datetime:</label>
              <input
                type="datetime"
                name="attack_datetime"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'2021-02-20 02:14:53'}
                value={values.attack_datetime}
              />
            </div>
            <div className="unit-list">
              <label htmlFor="slowest_unit">Slowest Unit</label>
              {
                units.map((unit: Unit) => {
                  return (
                    <button type="button" onClick={() => {
                      setFieldValue('defender_slowest_unit', unit)
                    }} className={values.defender_slowest_unit === unit ? 'is-selected' : ''}>
                      <img src={'/units/Unit_' + unit.name + '.png'} alt={unit.name} />
                    </button>
                  )
                })
              }
            </div>
            <div className="f-group">
              <label htmlFor="support_max_time">Support max time</label>
              <input
                type="number"
                max="10"
                min="2"
                name="support_max_time"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.support_max_time}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    )
}

export default AttackForm;