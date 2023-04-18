import { AppShell } from "@mantine/core";
import Navbar from "components/navbar";
import Footer from "components/footer";

const AppLayout = ({ children }) => {
  return (
    <AppShell navbar={<Navbar />} footer={<Footer />} padding={0}>
      {children}
    </AppShell>
  );
};

export default AppLayout;
