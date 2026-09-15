import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-between p-9 sm:p-24 3xl:p-44 min-h-[64vh] gap-9">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-orange">Not found</h1>
        <div className="flex flex-col gap-2 text-center">
          <p>The page you are looking for does not exist.</p>
          <Link
            to="/"
            className="underline text-sage-400 hover:text-sage-300 active:text-sage-600 transition-colors duration-75 hover:-translate-y-0.5 hover:underline-offset-3"
          >
            Return to home
          </Link>
        </div>
      </div>
    </section>
  );
}
