export default function UnderConstruction() {
  return (
    <section className="flex flex-col items-center justify-between p-9 sm:p-24 3xl:p-44 min-h-[64vh] gap-9">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-orange">Under construction</h1>
        <div className="flex flex-col gap-2 text-center">
          <h3>Mind the mess!</h3>
          <p>
            You seem to have stumbled upon a page that is currently under
            construction. Please check back later.
          </p>
        </div>
      </div>
      <img
        src="construction.svg"
        className="h-[85%] max-h-40 md:max-h-64 w-auto"
      />
    </section>
  );
}
