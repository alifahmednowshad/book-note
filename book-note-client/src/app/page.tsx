import { BookOpen, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 p-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-base-200 p-8 shadow-lg">
        <div className="flex items-center gap-3">
          <BookOpen size={36} className="text-primary" />

          <h1 className="text-3xl font-bold text-base-content">BookNook</h1>
        </div>

        <p className="mt-4 text-base-content/70">
          Welcome to your little online library.
        </p>

        <button className="btn btn-primary mt-6">
          <Search size={18} />
          Explore Books
        </button>
      </div>
    </main>
  );
}
