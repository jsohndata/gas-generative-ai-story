import { ReactNode } from "react";
import Spotify from "./Spotify";
import Footer from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
    <Spotify />
    {children}
    <Footer />
    </>
  );
}

export default AppLayout;