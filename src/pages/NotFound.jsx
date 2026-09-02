import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-slate-900">404</p>

      <h1 className="mt-4 text-2xl font-semibold text-slate-800">
        Page Not Found
      </h1>

      <p className="mt-2 text-slate-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;