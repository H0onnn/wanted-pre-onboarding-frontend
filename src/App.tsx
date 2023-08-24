import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import PageLayout from "./layout/PageLayout";
import ToasterContext from "./context/ToasterContext";
import { TokenProvider } from "./context/TokenContext";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <Router>
      <TokenProvider>
        <TodoProvider>
          <PageLayout>
            <ToasterContext />
            <AppRoutes />
          </PageLayout>
        </TodoProvider>
      </TokenProvider>
    </Router>
  );
};

export default App;
