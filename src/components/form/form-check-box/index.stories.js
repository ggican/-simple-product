import React from "react";
import FormCheckBox from "./index";

export default { title: "Form|Form Check Box", component: FormCheckBox };

export const FormCheckBoxDefault = () => {
    return (
        <FormCheckBox
            onGetValue={() => {}}
            data={[
                { value: 1, label: "Venti" },
                { value: 2, label: "Tail" },
                { value: 3, label: "Grande" },
            ]}
            name="radio-button"
            validation={[
                {
                    validate: { required: true },
                    message: "Form Tidak Boleh Kosong",
                },
            ]}
            useData={{
                label: "label",
                value: "value",
            }}
        ></FormCheckBox>
    );
};
