import Hero from "@/components/hero/Hero";

export default function Page() {
  return (
    <main className="grid">
      <section id="top" className="h-[calc(100dvh-5rem)]">
        <Hero />
      </section>
    </main>
  );
}
