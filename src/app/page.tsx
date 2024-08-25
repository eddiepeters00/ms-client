import Hero from "@/components/hero/Hero";

export default function Page() {
  return (
    <main className="grid">
      <section id="top" className="h-[calc(100dvh-5rem)]">
        <Hero />
      </section>
      <section
        id="search"
        className="h-[calc(100dvh-5rem)] bg-[#fffd92]"
      ></section>
      <section
        id="save"
        className="h-[calc(100dvh-5rem)] bg-[#ccf6ee]"
      ></section>
      <section id="shop" className="h-[calc(100dvh-5rem)] bg-red-50"></section>
      <section id="bottom" className="h-[calc(100dvh-5rem)]"></section>
    </main>
  );
}
