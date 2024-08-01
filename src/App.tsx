import { Provider } from "react-redux";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { store } from "./redux/features/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </>
  );
}

export default App;
