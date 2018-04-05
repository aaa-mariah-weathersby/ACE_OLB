import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
      inputItem: null,
      throwError: false,
    }

    this.inputID = props.inputID;
    this.title = props.title;
    this.placeholder = props.placeholder;
    this.value = props.value;
    this.maxLength = props.maxLength;
    this.icon = props.icon;
    this.onChange = props.onChange;
    this.onFocus = props.onFocus;
    this.onBlur = props.onBlur;
    this.typeAttr = props.typeAttr;
    this.validate = props.validate;

  }

  runValidation() {
    let val = this.value;

    if (Array.isArray(this.validate)) {
      for (let f of this.validate) {
        let fxVal = f(val);

        if (fxVal !== null) {
          this.setState({ throwError : true, errorMessage : fxVal });
          return;
        }
      }
    }

  }

  componentDidUpdate() {
    //this.updateErrorMessage();
  }

  // updateErrorMessage() {
  //   return (this.state !== null && this.state.throwError ?
  //     <label
  //       className="inputFieldErrorMessage"
  //       id={this.inputID + "ErrorMessage"}
  //     >
  //       {this.state.errorMessage}
  //     </label> :
  //     null)
  // }

  render() {
    return (
      <div className="inputFieldContainer">
        <label
            id={this.inputID + "Label"}
            className={this.inputID + "labelClass"}
            onClick={() => { this.inputItem.focus(); }}>
          {this.title}
        </label>
        <div className="inputContainer">
          <input
            id={this.inputID}
            className="inputElement"
            placeholder={this.placeholder}
            ref={(input) => { this.inputItem = input; }}
            // ref={this.inputItem}
            onChange={this.onChange}
            value={this.value}
            onFocus={this.onFocus}
            onBlur={(ref) => { this.runValidation(ref); }}
            maxLength={this.maxLength}
            type={this.typeAttr}
            validate={this.validate}
          />
          {this.icon}
        </div>
        {
          (this.state !== null && this.state.throwError ?
            <label
              className="inputFieldErrorMessage"
              id={this.inputID + "ErrorMessage"}
            >
              {this.state.errorMessage}
            </label> :
            null)
        }
      </div>
    );
  }
};

InputField.propTypes = {
  inputID: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  maxLength: PropTypes.string,
  icon: PropTypes.object,
  errorMessage: PropTypes.string,
  typeAttr: PropTypes.string,
  validate: PropTypes.array



};

export default InputField;
