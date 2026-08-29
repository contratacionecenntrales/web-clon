import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import es from "@/i18n/dictionaries/es";
import { getLocalizedServices } from "@/i18n/get-services";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Aviso Legal | Labs24k",
  description: "Información legal obligatoria conforme al artículo 10 de la Ley 34/2002 (LSSICE) sobre el sitio web de Labs24k.",
};

export default function AvisoLegalPage() {
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
            <h1 className="legal-page__title">Aviso Legal</h1>
            <p className="legal-page__updated">Información obligatoria conforme al artículo 10 de la Ley 34/2002 (LSSICE). Última actualización: 29 de agosto de 2026.</p>

            <div className="legal-page__content">
              <h2>1. Información general</h2>
              <p>
                En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
                Sociedad de la Información y de Comercio Electrónico (LSSICE), se hace constar que el sitio web <strong>www.labs24k.com</strong>
                {" "}(en adelante, «Labs24k») es un canal digital titularidad y explotación legal de la sociedad mercantil:
              </p>
              <table className="legal-page__table">
                <tbody>
                  <tr><th>Razón social</th><td>EVOLVIX GLOBAL, S.L.</td></tr>
                  <tr><th>C.I.F.</th><td>B21779673</td></tr>
                  <tr><th>Domicilio fiscal y social</th><td>Paseo de la Castellana, nº 95, Planta 22, Tetuán, 28046 Madrid</td></tr>
                  <tr><th>Teléfono de atención</th><td>+34 984 25 23 61</td></tr>
                  <tr><th>Correo electrónico oficial</th><td>info@labs24k.com</td></tr>
                </tbody>
              </table>
              <p>
                <strong>Labs24k</strong> es una marca comercial de EVOLVIX GLOBAL, S.L., empresa que opera igualmente otras marcas y
                plataformas digitales bajo la misma titularidad jurídica.
              </p>

              <h2>2. Condiciones de uso y acceso al sitio web</h2>
              <p>
                El acceso y la utilización del sitio web de Labs24k atribuyen la condición de usuario a quien lo realice, implicando la
                aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
              <p>
                El usuario se compromete a hacer un uso adecuado, lícito y diligente del sitio web, de sus contenidos y de los canales de
                contacto puestos a su disposición (formulario de contacto y widget de reserva de llamada), absteniéndose de realizar
                cualquier actividad que pueda dañar, inutilizar, sobrecargar o interferir con la infraestructura técnica del sitio web o de
                los proveedores tecnológicos que Labs24k utiliza para prestar dichos servicios.
              </p>

              <h2>3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los elementos que componen este sitio web, incluyendo de forma enunciativa pero no limitativa el código y diseño de
                la página, los textos, los elementos gráficos, la metodología «El Método IA», los logotipos, las marcas comerciales y los
                nombres de los servicios, constituyen propiedad intelectual e industrial exclusiva de EVOLVIX GLOBAL, S.L. o de sus
                licenciantes legítimos.
              </p>
              <p>
                Queda estrictamente prohibida la reproducción total o parcial, la distribución, la comunicación pública o la extracción de
                datos mediante sistemas automatizados de cualquier contenido de este sitio web sin la autorización previa y expresa de
                EVOLVIX GLOBAL, S.L.
              </p>

              <h2>4. Limitación de responsabilidad y garantías</h2>
              <p>
                Labs24k realiza los máximos esfuerzos técnicos para garantizar la disponibilidad del sitio web y la seguridad en la
                transmisión de datos. No obstante, no se hace responsable de las interrupciones técnicas temporales causadas por tareas de
                mantenimiento, actualizaciones o fallos de conexión ajenos a su control directo.
              </p>
              <p>
                El sitio web integra un widget de reserva de citas prestado por un proveedor tecnológico externo (ver la sección
                correspondiente en la <Link href="/privacidad">Política de Privacidad</Link>). Labs24k no se hace responsable del
                funcionamiento técnico de dicha herramienta de terceros, sin perjuicio de las garantías que le sean exigibles a su
                proveedor.
              </p>
              <p>
                El contenido de este sitio web tiene carácter informativo sobre los servicios de consultoría, implementación técnica y
                asesoramiento legal en Inteligencia Artificial prestados por Labs24k. El alcance, las condiciones y los resultados
                concretos de cada servicio se establecen exclusivamente en el contrato específico suscrito con cada cliente.
              </p>

              <h2>5. Legislación aplicable y fuero</h2>
              <p>
                Para la resolución de todas las controversias, reclamaciones o divergencias que puedan surgir en relación con el acceso, el
                uso o la interpretación de este Aviso Legal, las partes se someten de forma expresa, con renuncia voluntaria a cualquier
                otro fuero que pudiera corresponderles y en la medida en que la legislación aplicable lo permita, a la jurisdicción y
                competencia exclusiva de los Juzgados y Tribunales de Oviedo, Asturias.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={es.footer} services={services} locale="es" />
    </>
  );
}
