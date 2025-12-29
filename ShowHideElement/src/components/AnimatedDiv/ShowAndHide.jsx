import { useFadeTransition } from '../../hooks/useFadeTransition';
import "../../assets/css/AnimatedDiv/ShowAndHide.css";

export const ShowAndHide = ({ children }) => {
    const { shouldRender, isVisible, show, hide } = useFadeTransition(300);
    return (
        <div className="container">
            <button onClick={isVisible ? hide : show}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            
            {shouldRender && (
                <div 
                    className={`pop-wrapper ${isVisible ? 'visible' : ''}`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};