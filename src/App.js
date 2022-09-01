import "./App.css";
import { SnackbarProvider } from "notistack";
import Router from "./Routes";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
