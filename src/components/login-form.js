//firebase login

export const LoginForm = () => {
  let inputs = [
    {
      input: "email",
      type: "email"
    },
    {
      input: "password",
      type: "password"
    }
  ];

  let getInputs = () => {
    let login = {};
    inputs.forEach((x) => {
      login[x.input] = document.getElementById(x.input).value;
    });
    console.log(login);
  };

  return (
    <div id="login-form">
      <div className="login-inputs">
        {inputs.map((x) => (
          <input
            id={x.input}
            key={x.input}
            placeholder={x.input}
            type={x.type}
          />
        ))}
      </div>
      <button
        className="login-button"
        onClick={() => {
          getInputs();
        }}
      >
        login
      </button>

      <div>ronakmystery@gmail.com</div>
    </div>
  );
};
