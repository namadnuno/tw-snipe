import './App.scss';
import { UnitsManager } from './store/units';
import AttackForm, { AttactFormTypes } from './AttackForm';
import snipe, { SnipeDataType } from './store/snipe';
import { useState } from 'react';

const App = () => {
  const unitsManager = new UnitsManager();
  const [submited, setSubmited] = useState(false)
  const [snipeData, setSnipeData] = useState<SnipeDataType|null>(null)

  const handleSubmit = (values: AttactFormTypes) => {
    setSnipeData(snipe(values));
    setSubmited(true);
  }

  const handleReset = () => {
    setSubmited(false);
  }

  return (
    <div className="App">
      <div className="container">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <p>
          TW Sniper
        </p>
        {
          !submited &&
          <AttackForm units={unitsManager.getSpeedOrdered()} Submited={handleSubmit} />
        }
        {
          submited && snipeData != null &&
          <div className="result">
            <div className="line">
              <span className="label">Attack:</span>
              <span className="value">{snipeData.attack_at}</span>
            </div>
            <div className="line">
              <span className="label">Attack the barbarian village at:</span>
              <a rel="noreferrer" href={snipeData.attack_barbarian_village_url} target="_blank" className="value">{snipeData.attack_barbarian_at}</a>
            </div>
            <div className="line">
              <span className="label">Cancel the barbarian village attack at:</span>
              <a rel="noreferrer" href={snipeData.commands_place_url} target="_blank" className="value">{snipeData.cancel_attack_at}, {snipeData.cancel_suport_command_at}</a>
            </div>
            <button onClick={handleReset} type="button">Reset</button>
          </div>
        }
        <div className="bg-left"></div>
        <div className="bg-right"></div>
      </div>
    </div>
  );
}

export default App;
