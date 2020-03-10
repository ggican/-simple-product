import React, { useState, useEffect, useCallback } from "react";
import { FormInput, FormCheckBox } from "../../components/form";
import Button from "../../components/button";

import StyleLogin from "./index.style";

import { Text } from "../../components/typography";
import Container from "../../components/container";
import Separator from "../../components/separator";
import SocialButton from "../../components/social-button";
import Loading from "../../components/spinner-loading";

import service from "./index.service";
import { useStore } from "../../reducers";

const Login = props => {
    const { dispatch, state } = useStore();
    const [isDisbleButton, setDisbleButton] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: {
            value: "",
            success: false,
        },
        password: {
            value: "",
            success: false,
        },
        agree: {
            value: "",
            success: false,
        },
    });
    const handleGetValue = inputValue => {
        let isError = false;
        form[inputValue.name] = {
            value: inputValue.value,
            success: inputValue.success,
        };
        for (let key in form) {
            if (!form[key].success) {
                isError = true;
            }
        }
        setDisbleButton(isError);
        setForm(form);
    };

    const eventOnsubmitForm = e => {
        e.preventDefault();
        if (!isDisbleButton) {
            postLogin();
        }
    };

    const eventOnCliclSocialButton = () => {
        postLogin();
    };

    const onSuccessLogin = useCallback(() => {
        setLoadingState();
        const { history } = props;
        history.push("/");
        return false;
    }, [props]);

    useEffect(() => {
        if (state?.user?.auth?.isSuccess) {
            onSuccessLogin();
        }
    }, [state, onSuccessLogin]);

    const postLogin = () => {
        setLoadingState();
        service.login({ dispatch });
    };

    const setLoadingState = () => {
        setLoading(prevState => {
            return !prevState;
        });
    };
    return (
        <StyleLogin id="login-page">
            <Loading isLoading={isLoading}>
                <Loading.Spinner color="aquamarine"></Loading.Spinner>
            </Loading>
            <Container>
                <div className="login__box">
                    <div className="login__box_title">
                        <Text.BodyOne
                            fontWeight="bold"
                            block
                            align="center"
                            color="primary"
                        >
                            Login
                        </Text.BodyOne>
                    </div>
                    <div>
                        <FormInput
                            onGetValue={handleGetValue}
                            defaultValue={form.email.value}
                            name="email"
                            type="text"
                            id="email"
                            valid={[
                                {
                                    val: "isEmail",
                                    message: "Field email is email format",
                                },
                            ]}
                            label="Email"
                        ></FormInput>
                        <FormInput
                            onGetValue={handleGetValue}
                            defaultValue={form.password.value}
                            name="password"
                            type="password"
                            id="password"
                            valid={[
                                {
                                    val: "isLength",
                                    options: { min: 8 },
                                    message: "Field password min 8 character",
                                },
                            ]}
                            placeholder="Password"
                            label="Password"
                        ></FormInput>
                        <FormCheckBox
                            onGetValue={handleGetValue}
                            data={[
                                {
                                    label: (
                                        <p>
                                            Saya setuju dengan{" "}
                                            <a
                                                style={{
                                                    color: "#00cec8",
                                                }}
                                                href="/"
                                            >
                                                Syarat & Ketentuan{" "}
                                            </a>
                                            yang berlaku.
                                        </p>
                                    ),
                                    value: "value",
                                },
                            ]}
                            valid={[
                                {
                                    val: "isLength",
                                    options: { min: 1 },
                                    message: "Need To Check this field",
                                },
                            ]}
                            name="agree"
                            useData={{
                                label: "label",
                                value: "value",
                            }}
                        ></FormCheckBox>

                        <div className="form__submit">
                            <Button
                                onClick={eventOnsubmitForm}
                                block
                                disabled={isDisbleButton}
                                type="button"
                            >
                                Login
                            </Button>
                        </div>
                        <Separator withText="OR"></Separator>
                        <SocialButton
                            onLogin={eventOnCliclSocialButton}
                            title="FACEBOOK"
                            social="facebook"
                        ></SocialButton>
                        <SocialButton
                            onLogin={eventOnCliclSocialButton}
                            title="GOOGLE"
                            social="google"
                        ></SocialButton>
                    </div>
                </div>
            </Container>
        </StyleLogin>
    );
};

export default Login;
