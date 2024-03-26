const SignupFrom = ({ switchHandler ,username,email,password,singupButton,error,type}) => {
    return (
      <div className="flex column center full-width login-form">
        <h3>Sign Up</h3>
  
        <input className="" type="text" placeholder="Username" onChange={username}/>
        <input className="" type="text" placeholder="Email"  onChange = {email}/>
        <input
          className=""
          type="text"
          placeholder="Password"
          onChange={password}
        />
        <input
          className=""
          type="text"
          placeholder="Confirm Password"
          onChange={checkMatch}
        />
        <label htmlFor="select">Are you a person or a company?</label>
        <input type="select" id="select" onChange={type}>
            <option value="user">User</option>
            <option value="admin">Company</option>
        </input>
        
        <div>
            {error}
        </div>

        <button
          className=""
          onClick={singupButton}
        >
          Sign up
        </button>

  
        <p>
          Already have an account?{" "}
          <span
            onClick={() => {
              switchHandler(true);
            }}
          >
            Login
          </span>
        </p>
      </div>
    );
  };
  
  export default SignupFrom;
