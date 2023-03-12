import { useState } from "react";
import styles from "../styles/AdminLogin.module.css";
import { CFormInput, CFormFloating, CFormLabel } from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";

import Swal from "sweetalert2";

export default function AdminLogin() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/auth`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername: emailOrUsername,
          password: password,
        }),
      }
    );

    const resBody = await response.json();

    console.log(resBody);

    if (!response.ok) {
      Swal.fire({
        title: resBody.heading,
        text: resBody.message,
        icon: "error",
      });
      return;
    }

    // Successfully logged in
    //TODO: store the jwt in resBody.access in local storage and the state and redirect to admin dashboard/page
    console.log(resBody);
  }

  return (
    <div className={styles.loginLayout}>
      <span className={styles.adminLoginTitle}>Admin Login</span>

      <div className={styles.adminLoginDialog}>
        <h3 className={styles.dialogTitle}>Login</h3>

        <div className={styles.formContainer}>
          <h6 className={styles.dialogtext}>Welcome!</h6>

          <CFormFloating className="mb-3">
            <CFormInput
              type="email"
              id="emailOrUsername"
              placeholder="name@example.com"
              value={emailOrUsername}
              onChange={(e) => {
                setEmailOrUsername(e.target.value);
              }}
              style={{ backgroundColor: "#2B2B2B", color: "#FFFFFF" }}
            />
            <CFormLabel htmlFor="floatingInput" style={{ color: "gray" }}>
              Username / Email
            </CFormLabel>
          </CFormFloating>
          <CFormFloating>
            <CFormInput
              type="password"
              id="adminPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ backgroundColor: "#2B2B2B", color: "#FFFFFF" }}
            />
            <CFormLabel
              htmlFor="exampleFormControlTextarea1"
              style={{ color: "gray" }}
            >
              Password
            </CFormLabel>
          </CFormFloating>

          <div className={styles.loginButtonContainer}>
            <button className={styles.loginButton} onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
