import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { Button, Modal } from "antd";
const HeaderLogin = () => {
  const { user, login, logout } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);

    setLoading(false);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    login(email.value, password.value);
  };

  return (
    <>
      {user.length ? (
        <>
          <li>Welcome {user[0].username}</li>
          <li>
            <Button type="primary" onClick={logout}>
              logout
            </Button>
          </li>
        </>
      ) : (
        <li onClick={showModal}>Login</li>
      )}

      <Modal open={open} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <div>
          <h2 className="h-title-login">login</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin} id="loginForm">
          <label className="login-label" htmlFor="email">
            Email:
            <input type="email" id="email" required />
          </label>

          <label className="login-label" htmlFor="password">
            password:
            <input type="password" id="password" required />
          </label>

          <div className="login-button-group">
            <button className="button-login" type="submit" onClick={handleOk}>
              login
            </button>
            <button className="button-login" onClick={handleCancel}>
              return
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default HeaderLogin;
