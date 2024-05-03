import dynamic from "next/dynamic";
const Benefits = dynamic(() =>
  import("./_sections").then((mod) => mod.Benefits)
);
const Hero = dynamic(() => import("./_sections").then((mod) => mod.Hero));
const Ieee = dynamic(() => import("./_sections").then((mod) => mod.Ieee));
const Events = dynamic(() => import("./_sections").then((mod) => mod.Events));

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Ieee />
      <Events />
    </>
  );
}
