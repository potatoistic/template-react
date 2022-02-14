import { Suspense } from "react";

export const Lazy = ({ element: Element }) => (
  <Suspense fallback={<div>...loading...</div>}>
    <Element />
  </Suspense>
);

export default Lazy;
