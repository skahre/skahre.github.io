export default function UnderConstruction() {
  return (
    <section className="flex flex-col items-center justify-between p-[36px] sm:p-[96px] 3xl:p-[176px] min-h-[64vh]">
      <div className="flex flex-col items-center text-center gap-[16px]">
        <h1 className="text-orange">Under construction</h1>
        <div className="flex flex-col gap-[8px] text-center">
          <h3>Mind the mess!</h3>
          <p>
            You seem to have stumbled upon a page that is currently under
            construction. Please check back later.
          </p>
        </div>
      </div>
      <img
        src="construction.png"
        className="h-[85%] max-h-[10rem] md:max-h-[16rem] w-auto"
      />
    </section>
  );
}
