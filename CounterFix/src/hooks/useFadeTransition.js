import { useState, useEffect, useRef } from "react";

export function useFadeTransition(duration = 500, delay = 10) {
    const [shouldRender, setShouldRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timeoutId = useRef(null);
    
    const clear = () => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
    }

    useEffect(() => {
        return () => {
            clear();
        }
    }, []);

    const show = () => {
        clear();
        setShouldRender(true);
        timeoutId.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const hide = () => {
        clear();
        setIsVisible(false);
        timeoutId.current = setTimeout(() => {
            setShouldRender(false);
        }, duration);
    };

    return { shouldRender, isVisible, show, hide };
}