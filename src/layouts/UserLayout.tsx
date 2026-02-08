import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

UserLayout.whyDidYouRender = true; // Use for tracking re-render of this component