import { About } from "../components/Main/About";
import MainTitle from "../components/Main/MainTitle";
import Tournaments from "../components/Main/Tournaments";

// export const runtime = "edge";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Home() {
  const res = await fetch(
    `https://api-game.mongolnft.com/api/tournoments-web3/?type=active`,
    {
      next: { tags: ["tournaments"] },
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    return new Error("Failed to fetch data");
  }

  const tournaments = res.json();

  console.log(tournaments, "tournaments");

  return (
    <>
      <MainTitle />
      <About />
      <Tournaments />
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://api-game.mongolnft.com/api/tournoments-web3/?type=active`,
//     {
//       next: { tags: ["tournaments"] },
//       cache: "no-cache",
//     }
//   );

//   if (!res.ok) {
//     return new Error("Failed to fetch data");
//   }

//   const tournaments = res.json();
//   return { props: { tournaments } };
// };
