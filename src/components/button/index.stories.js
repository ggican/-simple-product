import React from "react";
import { IoIosHeart } from "react-icons/io";
import Button from "../../components/button";

export default {
    title: "Components|Button|Default",
    component: Button,
    info: {
        text: `
          description or documentation about my component, supports markdown
      
          ~~~js
          <Button>Click Here</Button>
          ~~~
        `,
    },
};

export const ButtonDefault = () => (
    <Button type="button">Button Default</Button>
);

export const ButtonSize = () => (
    <div>
        <div style={{ marginBottom: 10 }}>
            <Button size="small" type="button">
                Button small
            </Button>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button size="default" type="button">
                Button Default
            </Button>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button size="large" type="button">
                Button Default
            </Button>
        </div>
    </div>
);
export const ButtonColor = () => (
    <div>
        <div style={{ marginBottom: 10 }}>
            <Button color="blue" type="button">
                Button Blue
            </Button>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button color="primary" type="button">
                Button Primary
            </Button>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button color="secondary" type="button">
                Button wihte
            </Button>
        </div>
    </div>
);
export const ButtonInvert = () => (
    <div>
        <div style={{ marginBottom: 10 }}>
            <Button invert color="secondary" type="button">
                Button Invert Secondary
            </Button>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button invert color="primary" type="button">
                Button Invert Primary
            </Button>
        </div>
    </div>
);

export const ButtonRounded = () => (
    <Button rounded type="button">
        Button Rounded
    </Button>
);
export const ButtonChangeElementToAHref = () => (
    <div>
        <Button as="a" href="https://facebook.com">
            Change Button Element
        </Button>
    </div>
);
export const ButtonIcon = () => (
    <div>
        <Button type="button" iconOnly>
            <IoIosHeart color="#e02020" size={30}></IoIosHeart>
        </Button>
    </div>
);
