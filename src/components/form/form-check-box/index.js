import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StyleForm from "../index.style";
import validator from "validator";

const FormCheckBox = ({
    name = "checkbox-button",
    valid = false,
    data = [],
    isEdit = false,
    defaultValue = [],
    useData = {
        label: "label",
        secondLabel: false,
        value: "value",
    },
    onGetValue = () => {},
    filterProduct = false,
}) => {
    const [errorInput, setValueError] = useState([]);
    const [isFirstGet, setFirstGet] = useState(true);
    const [valueLocal, setValue] = useState(defaultValue);

    const onCheckFirstGet = () => {
        setFirstGet(false);
        if (!filterProduct) {
            const value = defaultValue;
            onCheckValidation(
                setValueError,
                valid,
                value,
                onCheckValue,
                name,
                setValue,
            );
        }
    };
    useEffect(() => {
        if (isFirstGet) {
            onCheckFirstGet();
        }
        return () => {};
    }, [isFirstGet]);

    const handleOnChange = e => {
        const { target } = e;
        const { value } = target;

        let valueData = [];
        if (!filterProduct && valueLocal.find(item => item === value)) {
            valueData = valueLocal.filter(item => item !== value);
        } else {
            valueData.push(value);
        }

        onCheckValidation(
            setValueError,
            valid,
            valueData,
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
            if (valid && !isFirstGet && !filterProduct) {
                error = valid.filter(item =>
                    item.options
                        ? !validator[item.val](
                              value.length > 0 ? "valid" : "",
                              item.options,
                          )
                        : !validator[item.val](value.length > 0 ? "valid" : ""),
                );
            }
            const success = valid
                ? isEdit
                    ? error.length === 0
                    : isFirstGet
                    ? false
                    : error.length === 0
                : true;
            onCheckValue({
                name,
                value,
                success: success,
                error,
            });
        });
        setValue(value);
    };

    const onCheckValue = value => {
        onGetValue(value);
        setValueError(value.error);
    };
    return (
        <StyleForm error={errorInput && errorInput.length > 0}>
            <div className="form__checkbox">
                {data.length > 0 &&
                    data.map(item => {
                        return (
                            <label
                                key={`${name}-${item[useData.value]}`}
                                className="checkbox"
                            >
                                <div className="checkbox--label">
                                    <span>{item[useData.label]}</span>
                                    {useData.secondLabel && (
                                        <span>{item[useData.secondLabel]}</span>
                                    )}
                                </div>
                                <input
                                    onChange={handleOnChange}
                                    defaultChecked={valueLocal.find(
                                        checkedLocal =>
                                            String(checkedLocal) ===
                                            String(item[useData.value]),
                                    )}
                                    value={item[useData.value]}
                                    name={name}
                                    type="checkbox"
                                />
                                <span className="checkmark"></span>
                            </label>
                        );
                    })}
                {errorInput &&
                    errorInput.length > 0 &&
                    errorInput.map((item, key) => (
                        <span className="form__error" key={key}>
                            {item.message}
                            ss
                        </span>
                    ))}
            </div>
        </StyleForm>
    );
};

FormCheckBox.propTypes = {
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
      Use data for data form 
      */
    data: PropTypes.array,
    /**
      Use isEdit for edit form 
      */
    isEdit: PropTypes.bool,
    /**
      Use defaultValue for default Value form 
      */
    defaultValue: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.array,
    ]),
    /**
      Use data for data form 
      */
    useData: PropTypes.shape({
        label: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
            PropTypes.array,
        ]),
        secondLabel: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
            PropTypes.array,
        ]),
        value: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
            PropTypes.array,
        ]),
    }),
    /**
      Use elementLabel for use element label form 
      */
    elementLabel: PropTypes.bool,
    /**
      Use onGetValue for get value for form
      */
    onGetValue: PropTypes.func,
    /**
      Use filterProduct for form use in filter product
      */
    filterProduct: PropTypes.bool,
};

FormCheckBox.defaultProps = {
    name: "checkbox-button",
    valid: false,
    defaultValue: [],
    isEdit: false,
    data: [],
    defaultValue: undefined,
    useData: {
        label: "label",
        secondLabel: false,
        value: "value",
    },
    elementLabel: false,
    onGetValue: () => {},
    filterProduct: false,
};

export default FormCheckBox;
