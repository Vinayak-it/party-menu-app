import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Menu from "./pages/Menu/Menu";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import SavedRecipes from "./pages/SavedRecipes/SavedRecipes";
import NotFound from "./pages/NotFound/NotFound";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/signin" element={<SignIn />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        }
      />

      <Route
        path="/menu/:id"
        element={
          <ProtectedRoute>
            <FoodDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/saved-recipes"
        element={
          <ProtectedRoute>
            <SavedRecipes />
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;