import Hero from "@/components/hero/Hero";
import Bottom from "@/components/sections/Bottom";
import Save from "@/components/sections/Save";
import Search from "@/components/sections/Search";
import Shop from "@/components/sections/Shop";

export default function Page() {
  return (
    <>
      {/** Navbar + Footer = 7rem*/}
      <main className="grid h-[calc(100vh-7rem)] snap-y snap-mandatory overflow-y-scroll no-scrollbar">
        <section
          id="top"
          className="snap-always snap-center h-[calc(100vh-5rem)]"
        >
          <Hero />
        </section>
        <section
          id="search"
          className="snap-always snap-center h-[calc(100vh-5rem)] bg-[#fffd92]"
        >
          <Search />
        </section>
        <section
          id="save"
          className="snap-always snap-center h-[calc(100vh-5rem)] bg-[#ccf6ee]"
        >
          <Save />
        </section>
        <section
          id="shop"
          className="snap-always snap-center h-[calc(100vh-5rem)] bg-red-50"
        >
          <Shop />
        </section>
        <section
          id="bottom"
          className="snap-always snap-center h-[calc(100vh-5rem)] bg-green-800"
        >
          <Bottom />
        </section>
      </main>
    </>
  );
}
