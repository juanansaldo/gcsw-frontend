import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ParticipantSignin from "./components/participant-signin.component"
import Loading from "./components/loading.component";
import Footer from "./components/footer.component";
import ProtectedRoute from "./auth/protected-route";
import ParticipantList from "./components/participant-list.component"
import CreateUser from "./components/create-user.component"; 
import NavBar from "./components/navbar.component";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  
  return (
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" exact element={<ParticipantSignin />} />
            <Route element={<ProtectedRoute />} >
                <Route path="/participants" element={<ParticipantList />} />
                <Route path="/create" element={<CreateUser />}  />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
