import React from 'react';
import { WrapperInput } from './styled';

const Input = (props) => {
  const {
    label,
    name,
    error = "",
    type = "text",
    placeholder = "",
    required = false,
    value = "",
    checked = false } = props;

  const onChange = (e) => {
    const { name: nameInput, value } = e.target;
    props.onChange(nameInput, value)
  }

  const showInputByType = () => {
    if (type === "radio") {
      return (
        <WrapperInput className="form-check">
          <input 
            type={type} 
            name={name} 
            required={required}
            className="form-check-input" 
            onChange={onChange} 
            checked={checked}
            value={value} 
          />
          <label className="form-check-label">
            {label}
          </label>
        </WrapperInput>
      )
    }

    return (
      <WrapperInput className="form-group">
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
          required={required} 
          className="form-control" 
          placeholder={placeholder} 
          onChange={onChange} 
          value={value}
        />
        <small className={`${error ? "text-danger" : ""} form-text`}>{error}</small>
      </WrapperInput>
    )
  }

  return <>{showInputByType()}</>;
};

export default Input;