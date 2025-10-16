import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  // Container style (centers everything)
  const containerStyle = {
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(135deg, #74ebd5, #9face6)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Box around the form
  const formBoxStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    width: "350px",
    textAlign: "center",
  };

  const titleStyle = {
    marginBottom: "20px",
    color: "#333",
  };

  // Input field style
  const inputStyle = {
    margin: "10px 0",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "15px",
    width: "100%",
  };

  // Button style
  const buttonStyle = {
    marginTop: "10px",
    padding: "12px",
    background: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  };

  // Paragraph and link text
  const linkText = {
    marginTop: "15px",
    fontSize: "14px",
    color: "#333",
  };

  const spanStyle = {
    color: "#6c63ff",
    cursor: "pointer",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={formBoxStyle}>
        <h2 style={titleStyle}>{isLogin ? "Login" : "Sign Up"}</h2>

        {isLogin ? (
          <form>
            <input type="email" placeholder="Email" required style={inputStyle} />
            <input type="password" placeholder="Password" required style={inputStyle} />
            <button type="submit" style={buttonStyle}>
              Login
            </button>
            <p style={linkText}>
              Don’t have an account?{" "}
              <span style={spanStyle} onClick={() => setIsLogin(false)}>
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <form>
            <input type="text" placeholder="Full Name" required style={inputStyle} />
            <input type="email" placeholder="Email" required style={inputStyle} />
            <input type="password" placeholder="Password" required style={inputStyle} />
            <button type="submit" style={buttonStyle}>
              Sign Up
            </button>
            <p style={linkText}>
              Already have an account?{" "}
              <span style={spanStyle} onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
