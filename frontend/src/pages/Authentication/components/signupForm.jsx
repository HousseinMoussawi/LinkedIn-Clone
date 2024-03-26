const signupFrom = ({ switchHandler ,username,email,password,passwordConfirm,singupButton,error}) => {
    return (
      <div className="flex column center full-width login-form">
        <h3>Sign Up</h3>
  
        <input className="" type="text" placeholder="Username" value={username}/>
        <input className="" type="text" placeholder="Email"  value = {email}/>
        <input
          className=""
          type="text"
          placeholder="Password"
          value={password}
        />
        <input
          className=""
          type="text"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={checkMatch}
        />
        <label htmlFor="select">Are you a person or a company?</label>
        <input type="select" id="select">
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
  
  export default signupFrom;
  