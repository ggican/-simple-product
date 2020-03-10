import React, { useState } from "react";
import PropTypes from "prop-types";
import StyleForm from "../index.style";
import validator from "validator";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const FormInput = ({
    type = "text",
    id = "input-form",
    label = false,
    defaultValue = undefined,
    valid = false,
    name = "input-form",
    onGetValue = () => {},
}) => {
    const [errorInput, setValueError] = useState([]);
    const [isShowInputValue, setShowInputValue] = useState(false);
    const [focus, setFocus] = useState(defaultValue);
    const [valueLocal, setValue] = useState(defaultValue);

    const handleOnFocus = e => {
        e.preventDefault();
        setFocus(true);
    };
    const handleOnBlur = e => {
        e.preventDefault();
        const { target } = e;
        if (target.value.length === 0) {
            setFocus(false);
        }
    };

    const handleOnChange = e => {
        e.preventDefault();
        const { target } = e;
        const { value } = target;
        onCheckValidation(
            setValueError,
            valid,
            value,
            onCheckValue,
            name,
            setValue,
        );
    };

    const onCheckValidation = (
        setValueError,
        valid,
        value,
        onCheckValue,
        name,
        setValue,
    ) => {
        setValueError(prevState => {
            let error = prevState;
            if (valid) {
                error = valid.filter(item => {
                    return item.options
                        ? !validator[item.val](value, item.options)
                        : !validator[item.val](value);
                });
            }

            onCheckValue({
                name,
                value,
                success: error.length === 0,
                error,
            });
        });
        setValue(value);
    };

    const onCheckValue = value => {
        onGetValue(value);
        setValueError(value.error);
    };
    const onShowInputValue = e => {
        e.stopPropagation();
        setShowInputValue(!isShowInputValue);
    };

    return (
        <StyleForm error={errorInput && errorInput.length > 0}>
            <input
                defaultValue={valueLocal}
                className={`form__input ${focus && "form__input__focus"}`}
                onChange={handleOnChange}
                id={id}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                type={isShowInputValue ? "text" : type}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={onShowInputValue}
                    className="form__input__icon"
                >
                    {isShowInputValue ? (
                        <IoMdEye size={22}></IoMdEye>
                    ) : (
                        <IoMdEyeOff size={22}></IoMdEyeOff>
                    )}
                </button>
            )}
            {label && (
                <label className="form__label" htmlFor={id}>
                    {label}
                </label>
            )}
            {errorInput &&
                errorInput.length > 0 &&
                errorInput.map((item, key) => (
                    <span className="form__error" key={key}>
                        {item.message}
                    </span>
                ))}
        </StyleForm>
    );
};

FormInput.propTypes = {
    /**
      Use name for name
      */
    name: PropTypes.string,
    /**
      Use name for validation 
      */
    valid: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.array,
    ]),
    /**
      Use id for id form 
      */
    id: PropTypes.string,
    /**
      Use label for label form 
      */
    label: PropTypes.string,
    /**
      Use type for type form input
      */
    type: PropTypes.oneOf(["text", "number", "password", "email"]),
    /**
      Use defaultValue for default Value form 
      */
    defaultValue: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
        PropTypes.node.isRequired,
        PropTypes.array,
    ]),
    /**
      Use isEdit if use form input for edit form
      */
    isEdit: PropTypes.bool,
    /**
      Use onGetValue for get value for form
      */
    onGetValue: PropTypes.func,
};

FormInput.defaultProps = {
    type: "text",
    name: "form-input",
    label: "label",
    id: "form-input",
    valid: false,
    defaultValue: undefined,
    isEdit: false,
    onGetValue: () => {},
};

export default FormInput;
