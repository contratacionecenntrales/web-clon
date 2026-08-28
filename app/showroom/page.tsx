import { SplineSceneBasic } from "@/components/spline-scene-demo";
import FAQDemo from "@/components/faq-tabs-demo";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata = {
  title: "Component Showroom | Labs24k",
  description: "Internal showroom for newly integrated UI components (Spline 3D scene, Spotlight, animated FAQ tabs).",
};

export default function ShowroomPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        <header>
          <h1 className="text-3xl font-bold text-white">Component Showroom</h1>
          <p className="mt-2 text-neutral-400">
            Recently integrated components with their original demo content, kept separate from the
            real Labs24k marketing pages until real Spanish copy/assets are ready to wire in.
          </p>
        </header>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Spline 3D Scene + Spotlight
          </h2>
          <ErrorBoundary
            fallback={
              <div className="flex h-[500px] w-full items-center justify-center rounded-lg border border-neutral-800 bg-black/90 text-sm text-neutral-500">
                No se pudo cargar la escena 3D (red bloqueada o spline.design no accesible).
              </div>
            }
          >
            <SplineSceneBasic />
          </ErrorBoundary>
        </section>

        <section className="rounded-xl border border-neutral-800">
          <h2 className="p-6 pb-0 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Animated FAQ Tabs
          </h2>
          <FAQDemo />
        </section>
      </div>
    </main>
  );
}
