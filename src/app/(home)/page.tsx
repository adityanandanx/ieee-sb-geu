import dynamic from "next/dynamic";
const Benefits = dynamic(() =>
  import("./_sections").then((mod) => mod.Benefits)
);
const Hero = dynamic(() => import("./_sections").then((mod) => mod.Hero));
const Advertisement = dynamic(() =>
  import("./_sections").then((mod) => mod.Advertisement)
);
const Ieee = dynamic(() => import("./_sections").then((mod) => mod.Ieee));
const Team = dynamic(() => import("./_sections").then((mod) => mod.Team));
const Events = dynamic(() => import("./_sections").then((mod) => mod.Events));
const Testimonials = dynamic(() =>
  import("./_sections").then((mod) => mod.Testimonials)
);

export default function Home() {
  return (
    <>
      <Hero />
      <Advertisement />
      <Ieee />
      <Benefits />
      <Team />
      <Events />
      {/* <Testimonials /> */}
    </>
  );
}
