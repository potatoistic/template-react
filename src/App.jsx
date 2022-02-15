import { QueryClientProvider } from "react-query";
import Router from "./routes";

import { client } from "./config";

export const App = () => (
  <QueryClientProvider client={client}>
    <Router />
  </QueryClientProvider>
);
