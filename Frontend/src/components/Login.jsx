import React from "react";

export const Login = () => {
  return (
    <>
      <section class="auth-container">
        <div class="auth-form">
          <div class="form-toggle">
            <button class="toggle-btn active" data-form="login">
              Login
            </button>
            <button class="toggle-btn" data-form="signup">
              Sign Up
            </button>
          </div>
          <div class="form-content">
            <form id="login-form" class="form active">
              <h2>Login</h2>
              <div class="form-group">
                <label for="login-email">Email:</label>
                <input type="email" id="login-email" name="email" required />
              </div>
              <div class="form-group">
                <label for="login-password">Password:</label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  required
                />
              </div>
              <button type="submit">Login</button>
              <p class="switch-form">
                Don't have an account?{" "}
                <a href="#" data-form="signup">
                  Sign Up
                </a>
              </p>
            </form>

            <form id="signup-form" class="form">
              <h2>Sign Up</h2>
              <div class="form-group">
                <label for="signup-email">Email:</label>
                <input type="email" id="signup-email" name="email" required />
              </div>
              <div class="form-group">
                <label for="signup-password">Password:</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  required
                />
              </div>
              <div class="form-group">
                <label for="signup-confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="signup-confirm-password"
                  name="confirm-password"
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
              <p class="switch-form">
                Already have an account?{" "}
                <a href="#" data-form="login">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
