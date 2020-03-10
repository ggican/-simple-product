import { useState, useEffect, useRef } from "react";

const useDetectMouseUpDown = () => {
    const prevScrollY = useRef(0);
    const [isFirst, setFirst] = useState(true);
    const [goingUp, setGoingUp] = useState(true);
    useEffect(() => {
        if (isFirst) {
            setFirst(false);
        }
    }, [isFirst]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current > currentScrollY && !goingUp && !isFirst) {
                setGoingUp(true);
            }
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp, isFirst]);
    return goingUp;
};

export default useDetectMouseUpDown;
