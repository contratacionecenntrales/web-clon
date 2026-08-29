import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import es from "@/i18n/dictionaries/es";
import { getLocalizedServices } from "@/i18n/get-services";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Política de Cookies | Labs24k",
  description: "Qué cookies y tecnologías similares utiliza el sitio web de Labs24k.",
};

export default function CookiesPage() {
  const services = getLocalizedServices(es);
  return (
    <>
      <SiteInteractions emailDict={es.contact.form} />
      <SiteChrome dict={es} locale="es" />
      <main id="main">
        <section className="legal-page">
          <div className="container legal-page__container">
            <Link href="/" className="legal-page__back">
              <ArrowLeft aria-hidden="true" size={15} />
              Volver a Labs24k
            </Link>
            <h1 className="legal-page__title">Política de Cookies</h1>
            <p className="legal-page__updated">Última actualización: 29 de agosto de 2026.</p>

            <div className="legal-page__content">
              <h2>1. Qué son las cookies</h2>
              <p>
                Las cookies son pequeños archivos de texto que un sitio web puede guardar en tu navegador para recordar información sobre
                tu visita. En esta página te explicamos, con total transparencia, qué usa realmente labs24k.com y qué no.
              </p>

              <h2>2. Cookies propias de Labs24k</h2>
              <p>
                <strong>Labs24k no utiliza cookies propias de analítica ni de publicidad.</strong> El sitio web utiliza únicamente una
                tecnología de almacenamiento local del navegador (<code>sessionStorage</code>), que no es técnicamente una cookie y no se
                envía a ningún servidor, para recordar que has cerrado el aviso informativo sobre el AI Act durante tu sesión de
                navegación. Este dato se borra automáticamente al cerrar la pestaña o el navegador, y se considera estrictamente
                necesario para el funcionamiento de esa función, por lo que no requiere tu consentimiento previo.
              </p>

              <h2>3. Cookies de terceros</h2>
              <p>
                La sección de contacto de este sitio web incluye un widget de reserva de citas proporcionado por un proveedor tecnológico
                externo (GoHighLevel, alojado en software.metatok.ai), contratado por Labs24k para gestionar la agenda de llamadas
                comerciales. Al cargar e interactuar con ese widget, dicho proveedor puede instalar sus propias cookies técnicas o
                funcionales, necesarias para que la herramienta de reserva funcione correctamente.
              </p>
              <p>
                Labs24k no controla directamente esas cookies de terceros. Si quieres más información sobre ellas, puedes consultarlo antes
                de reservar tu llamada o escribirnos a <a href="mailto:info@labs24k.com">info@labs24k.com</a>.
              </p>
              <p>
                Este sitio web no utiliza Google Analytics, píxeles publicitarios (Meta, Google Ads, LinkedIn u otros) ni ninguna otra
                herramienta de seguimiento de terceros con fines publicitarios.
              </p>

              <h2>4. Cómo gestionar o eliminar las cookies</h2>
              <p>
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu navegador. Ten en
                cuenta que bloquear las cookies del widget de reserva de citas puede impedir que esa herramienta funcione correctamente.
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-el-rastreo-firefox-escritorio" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>

              <h2>5. Cambios en esta política</h2>
              <p>
                Si en el futuro incorporamos nuevas herramientas que utilicen cookies (por ejemplo, analítica propia), actualizaremos esta
                página para reflejarlo antes de activarlas, y solicitaremos tu consentimiento cuando sea legalmente necesario.
              </p>
              <p>
                Para cualquier duda sobre esta política, puedes consultar también nuestro <Link href="/aviso-legal">Aviso Legal</Link> y
                nuestra <Link href="/privacidad">Política de Privacidad</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={es.footer} services={services} locale="es" />
    </>
  );
}
