import { About } from "../components/main/About";
import MainTitle from "../components/main/MainTitle";
import Tournaments from "../components/main/Tournaments";

// export const runtime = "edge";

export default function Home() {
  return (
    <>
      <MainTitle />
      <About />
      <Tournaments />
    </>
  );
}