"use client"

import FooterPage from "./components/footerpage";
import HomePage from "./components/homepage";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="bg-zinc-800">
      <Nav></Nav>
      <main>
        <HomePage></HomePage>
      </main>
      <FooterPage></FooterPage>
    </div>
  );
}
