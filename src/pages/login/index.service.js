// begin reducer
import { servicesAction } from "../../reducers";
// end reducer

const loginService = {
    login: ({ dispatch }) => {
        servicesAction(dispatch).reduxLogin({
            reducer: "service",
            group: "user",
            key: "auth",
            data: {
                role: "USER",
            },
            type: 200,
            isError: false,
            isSuccess: true,
        });
    },
};

export default loginService;
