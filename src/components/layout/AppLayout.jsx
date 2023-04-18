import React from "react";
import { AppShell } from "@mantine/core";
import Footer from "../footer";
import Navbar from "../navbar";

const AppLayout = ({ children }) => {
  return (
    <AppShell navbar={<Navbar />} footer={<Footer />} padding={0}>
      {children}
    </AppShell>
  );
};

export default AppLayout;
