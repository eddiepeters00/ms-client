export default function Hero() {
  const rollingMeanings = [
    "delicious chocolate recipes",
    "fresh green salads",
    "quick midnight snacks",
    "fancy dinner recipes",
  ];

  return (
    <div className="grid place-content-center mt-20 font-extrabold text-5xl gap-4 text-center">
      <h2>Are you craving</h2>
      <h3 className="text-emerald-600 before:animate-slideinup after:animate-slideup">
        {rollingMeanings[0]}
      </h3>
    </div>
  );
}
