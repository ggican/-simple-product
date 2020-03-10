import React from "react";
import FormInput from "./index";

export default { title: "Form|Form Input", component: FormInput };

export const FormInputDefault = () => {
    return (
        <FormInput
            name="input-form"
            id="input-form"
            placeholder="Masukan Nama Anda"
            label="Label"
        ></FormInput>
    );
};
export const FormInputValidationLength = () => {
    return (
        <FormInput
            name="full_name"
            id="full_name"
            label="Full Name"
            type="text"
            valid={[
                {
                    val: "isLength",
                    options: { min: 3, max: 12 },
                    message: "Field Full Name min 3 and max 12 character",
                },
            ]}
        ></FormInput>
    );
};
export const FormInputValidationEmail = () => {
    return (
        <FormInput
            name="email"
            id="email"
            label="Email"
            type="email"
            valid={[
                {
                    val: "isEmail",
                    message: "Need Email For This Field",
                },
            ]}
        ></FormInput>
    );
};
export const FormInputValidationPassword = () => {
    return (
        <FormInput
            name="password"
            id="password"
            label="Password"
            type="password"
            valid={[
                {
                    val: "isLength",
                    options: { min: 3 },
                    message: "Field Password min 3 characters",
                },
            ]}
        ></FormInput>
    );
};
