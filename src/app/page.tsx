import Hero from "@/components/hero/Hero";

export default function Page() {
  return (
    <main className="grid bg-red-100">
      <section id="top" className="h-[calc(100dvh-5rem)]">
        <Hero />
      </section>
    </main>
  );
}
