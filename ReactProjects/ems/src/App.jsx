import  { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import Employee from "./components/DashBoard/Employee";
import Admin from "./components/DashBoard/Admin";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  // localStorage.clear();
  // setLocalStorage();
  const [user, setUser] = useState(null); // "admin" or "employee"
  const [loggedInUser, setLoggedInUser] = useState(null); // actual user object
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const savedUser = localStorage.getItem("loggedInUser");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser.role);
        setLoggedInUser(parsedUser.data);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      // Check for admin
      const admin = authData.admin.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        setUser("admin");
        setLoggedInUser(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
        return;
      }

      // Check for employee
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && loggedInUser && <Admin changeUser={setUser} data={loggedInUser} />}
      {user === "employee" && loggedInUser && <Employee changeUser={setUser} data={loggedInUser} />}

    </>
  );
};

export default App;
