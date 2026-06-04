// routes/AuthRoutes.js
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/majaa-quiz/login" replace />;
}

// export function PublicRoute({ children }) {
//   const token = localStorage.getItem("token");
//   return token ? <Navigate to="/contest/majaa-quiz" replace /> : children;
// }


export function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  return token
    ? <Navigate to="/majaa-quiz/questions" replace />
    : children;
}