import React from "react";

export const withProvider = (Provider: any) => (Component: any) => (props: any) => (
  <Provider>
    <Component {...props} />
  </Provider>
);
