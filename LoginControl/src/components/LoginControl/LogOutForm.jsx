import "../../assets/css/LoginControl/LogOutForm.css"

const LogOutForm = ({ handleLogout, isVisible }) => {
    return (
        <main className={`logged-in ${isVisible ? "" : "exit"}`}>
            <h1>U logged in!</h1>
            <h2>But there is no page!</h2>
            <button onClick={handleLogout} className="btn-log-out">Leave!</button>
        </main>
    );
}

export default LogOutForm;