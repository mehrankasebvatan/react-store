import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setuser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((user) => user.email === email)) {
      return { success: false, message: "user Already exists!" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setuser({ email });
    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setuser({ email });
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setuser(null);
  }

  return (
    <AuthContext.Provider value={{ signup, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
