import NavBar from "../src/components/NavBar";
import Seo from "../src/components/Seo";
import MFooter from "../src/main/MFooter";
import MHeader from "../src/main/MHeader";
import MMain from "../src/main/MMain";
import MNavBar from "../src/main/MNavBar";

export default function Home() {

  return (
    <div>
      <Seo title="Showcase | Next.js" />
      <MHeader />
      <MNavBar />
      <MMain />
      <MFooter />
    </div>
  )
}