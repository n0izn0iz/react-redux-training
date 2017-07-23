import React from 'react';

const FormElem = (props) => {
  return (
    <div className="form-group">
      <label>
        Title
        <input
          className="form-control"
          value={ props.value }
          onChange={ props.onChange }
          type="text"
        />
      </label>
    </div>
  );
}

export default FormElem;
