import Logo from "@/components/shared/Logo";


export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 p-8">
      <Logo />

      <h1 className="mt-8 text-4xl font-bold text-primary">
        Welcome to BookNook
      </h1>
    </main>
  );
}
