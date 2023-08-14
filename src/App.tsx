import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import PageLayout from "./layout/PageLayout";
import ToasterContext from "./context/ToasterContext";
import { TokenProvider } from "./context/TokenContext";

const App = () => {
  return (
    <Router>
      <TokenProvider>
        <PageLayout>
          <ToasterContext />
          <AppRoutes />
        </PageLayout>
      </TokenProvider>
    </Router>
  );
};

export default App;
