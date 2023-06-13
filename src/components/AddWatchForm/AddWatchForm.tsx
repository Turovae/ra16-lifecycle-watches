import React, { useState } from 'react';
import './AddWatchForm.css';

function AddWatchForm({addWatch}: { addWatch: Function }) {
  const initStateForm = {
    name: '',
    timezone: undefined,
  };

  const [stateForm, setStateForm] = useState(initStateForm);

  const changeField = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.name);
    console.log(evt.target.value);
    console.log(stateForm);
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
    console.log(addWatch);
    addWatch(stateForm);
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
          pattern='-?\d+'
          />
      </div>
      <div className="form-column">
        <button type="submit" className='form-btn form-control'>Добавить</button>
      </div>
    </form>
  );
}

export default AddWatchForm;
