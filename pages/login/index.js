import React from "react";

function Login() {
  return <div>log in</div>;
}

Login.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export default Login;
