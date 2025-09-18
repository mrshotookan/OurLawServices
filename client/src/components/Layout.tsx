import Navigation from "./Navigation";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}
