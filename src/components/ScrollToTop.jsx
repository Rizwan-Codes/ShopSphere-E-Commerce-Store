import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const location = useLocation();
    const { pathname, state } = location;

    useEffect(() => {
        if (state?.scrollTo) {
            const el = document.getElementById(state.scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, state]);

    return null;
}

export default ScrollToTop;