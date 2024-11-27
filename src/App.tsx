import { Provider } from "react-redux";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { store } from "./redux/features/store";
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainLayout />
        <Toaster position="top-right" reverseOrder={false} />

      </Provider>
    </>
  );
}

export default App;
