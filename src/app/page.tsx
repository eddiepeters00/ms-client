import Hero from "@/components/hero/Hero";

export default function Page() {
  return (
    <main className="grid h-[calc(100vh-5rem)] snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <section id="top" className="snap-start h-[calc(100vh-5rem)]">
        <Hero />
      </section>
      <section
        id="search"
        className="snap-start h-[calc(100vh-5rem)] bg-[#fffd92]"
      ></section>
      <section
        id="save"
        className="snap-start h-[calc(100vh-5rem)] bg-[#ccf6ee]"
      ></section>
      <section
        id="shop"
        className="snap-start h-[calc(100vh-5rem)] bg-red-50"
      ></section>
      <section
        id="bottom"
        className="snap-start h-[calc(100vh-5rem)]"
      ></section>
    </main>
  );
}
