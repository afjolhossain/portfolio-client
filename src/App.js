import { RouterProvider } from "react-router-dom";
import router from "./Pages/Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
