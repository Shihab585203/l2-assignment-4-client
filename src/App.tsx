import { Provider } from "react-redux";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { store } from "./redux/features/store";
import 'react-photo-view/dist/react-photo-view.css';

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
