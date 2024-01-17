import React from "react";
import { RouterPage } from "./pages/";
import { UiProvider } from "./context/UiContexts";

export const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
};
