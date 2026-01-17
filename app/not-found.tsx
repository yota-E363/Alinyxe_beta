import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold glow-text mb-4">404</h1>
      <p className="text-xl mb-8">Page non trouvée</p>
      <Link href="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  );
}