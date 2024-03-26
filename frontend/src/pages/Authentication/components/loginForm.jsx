const LoginForm = ({ switchHandler,goHome,user,password,error}) => {


  return (
    <div className="flex column center ">
      <h3>Login</h3>

      <input className="" type="text" placeholder="Email or username" onChange={user}/>
      <input
        className=""
        type="text"
        placeholder="Password"
        onChange={password}
      />

        <div>{error}</div>


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

export default LoginForm;
