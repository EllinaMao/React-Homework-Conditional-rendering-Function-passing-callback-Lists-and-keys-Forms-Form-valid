import "../../assets/css/LoginControl/LogInForm.css";
const LogInForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLoggin,
  error,
  isVisible,
}) => {
  return (
    <div className={`anim-wrapper ${isVisible ? 'entering' : 'exiting'}`}>
      <form
        onSubmit={handleLoggin}
        className={`auth-form ${error ? "error-shake" : ""} `}
      >
        <h2>Log In</h2>
        <div className="input-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn-log-in">
          Log In
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LogInForm;
