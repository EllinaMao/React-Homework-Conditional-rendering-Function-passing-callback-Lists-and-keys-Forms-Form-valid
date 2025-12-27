import {useState} from "react";

export function useFadeTransition(duration = 500, delay = 10) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

    const show = () => {
        setShouldRender(true);
        setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const hide = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShouldRender(false);
        }, duration);
    };

    return { shouldRender, isVisible, show, hide };
}