import React, { useState } from 'react';
import './AddWatchForm.css';

function AddWatchForm({onAddWatch}: { onAddWatch: CallableFunction }) {
  const initStateForm = {
    name: '',
    timezone: undefined,
  };

  const [stateForm, setStateForm] = useState(initStateForm);

  const changeField = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    })
  }

  const addData = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log(evt);
    console.log('submit');
    console.log(onAddWatch);
    onAddWatch(stateForm);
    setStateForm(initStateForm);
  }

  return (
    <form className="add-watch-form" onSubmit={addData}>
      <div className="form-column">
        <label htmlFor="name">Название</label>
        <input 
          type="text"
          name="name"
          id="name"
          className='form-input form-control'
          onChange={changeField}
          value={stateForm.name}
          required
          placeholder='Moscow'
          />
      </div>
      <div className="form-column">
        <label htmlFor="timezone">Временная зона</label>
        <input
          type="text"
          name="timezone"
          id="timezone"
          className='form-input form-control'
          onChange={changeField}
          value={stateForm.timezone || ''}
          required
          pattern='[\-\+]\d{1, 2}'
          placeholder='+03 или -7'
          />
      </div>
      <div className="form-column">
        <button type="submit" className='form-btn form-control'>Добавить</button>
      </div>
    </form>
  );
}

export default AddWatchForm;
