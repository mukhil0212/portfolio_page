import dynamic from "next/dynamic";

// Dynamically import the Navbar and Hero components with SSR disabled
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

const Page = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Page;
