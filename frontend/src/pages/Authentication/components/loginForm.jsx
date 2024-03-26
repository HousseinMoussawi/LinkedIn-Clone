const loginForm = ({ switchHandler,goHome,user,password}) => {


  return (
    <div className="flex column center ">
      <h3>Login</h3>

      <input className="" type="text" placeholder="Email or username" value={user}/>
      <input
        className=""
        type="text"
        placeholder="Password"
        value={password}
      />

      <button
        className=""
        onClick={goHome}
      >
        Login
      </button>

      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            switchHandler(false);
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default loginForm;
