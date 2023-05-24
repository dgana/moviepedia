import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Header } from "./layout";
import { Home, Detail } from "./pages";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
