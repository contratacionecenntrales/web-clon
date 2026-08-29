import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import es from "@/i18n/dictionaries/es";
import { getLocalizedServices } from "@/i18n/get-services";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Política de Privacidad | Labs24k",
  description: "Cómo trata Labs24k los datos personales de sus visitantes, en cumplimiento del RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
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
            <h1 className="legal-page__title">Política de Privacidad</h1>
            <p className="legal-page__updated">
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD). Última
              actualización: 29 de agosto de 2026.
            </p>

            <div className="legal-page__content">
              <p>
                En Labs24k tratamos los datos personales de nuestros visitantes y contactos con el mínimo alcance necesario y bajo el
                cumplimiento estricto del RGPD y la LOPDGDD. Este sitio web es una página informativa de servicios de consultoría: no
                dispone de registro de usuarios, cuentas, suscripciones ni pasarelas de pago, por lo que el tratamiento de datos que
                realizamos es considerablemente más limitado que el de una plataforma de software.
              </p>

              <h2>1. ¿Quién es el responsable del tratamiento?</h2>
              <table className="legal-page__table">
                <tbody>
                  <tr><th>Marca comercial</th><td>Labs24k</td></tr>
                  <tr><th>Titular legal</th><td>EVOLVIX GLOBAL, S.L.</td></tr>
                  <tr><th>C.I.F.</th><td>B21779673</td></tr>
                  <tr><th>Dirección</th><td>Paseo de la Castellana, nº 95, Planta 22, Tetuán, 28046 Madrid</td></tr>
                  <tr><th>Email de contacto</th><td>info@labs24k.com</td></tr>
                  <tr><th>Teléfono de contacto</th><td>+34 984 25 23 61</td></tr>
                </tbody>
              </table>

              <h2>2. Qué datos tratamos y de dónde proceden</h2>
              <p>Este sitio web recoge datos personales a través de dos únicos canales:</p>
              <ul>
                <li>
                  <strong>Formulario de contacto.</strong> Nombre, empresa, correo electrónico, teléfono y el mensaje que describas sobre tu
                  situación. <strong>Estos datos no se envían a ningún servidor ni base de datos de Labs24k</strong>: el formulario abre el
                  cliente de correo electrónico del propio visitante con un mensaje ya redactado, y es el visitante quien decide, de forma
                  voluntaria, enviarlo a nuestra dirección info@labs24k.com. A partir de ese envío, tratamos esos datos como cualquier
                  correo electrónico recibido.
                </li>
                <li>
                  <strong>Widget de reserva de llamada.</strong> La sección de contacto incluye una herramienta de reserva de citas
                  proporcionada por un proveedor tecnológico externo (GoHighLevel, alojado en software.metatok.ai), contratada por Labs24k
                  para gestionar la agenda de llamadas comerciales. Cuando reservas una llamada a través de este widget, los datos que
                  introduces (normalmente nombre, correo electrónico, teléfono y franja horaria) se envían directamente a la plataforma de
                  ese proveedor, que actúa como encargado del tratamiento por cuenta de Labs24k.
                </li>
              </ul>
              <p>
                Labs24k no recaba contraseñas, datos de facturación, datos de pago ni ningún dato a través de cuentas de usuario, porque
                este sitio web no ofrece ninguna de esas funcionalidades.
              </p>

              <h2>3. Finalidades del tratamiento y base de licitud</h2>
              <table className="legal-page__table">
                <thead>
                  <tr><th style={{ width: "50%" }}>Finalidad</th><th>Base de licitud</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Responder a las consultas recibidas por correo a raíz del formulario de contacto.</td>
                    <td>Consentimiento del interesado al enviar voluntariamente el correo.</td>
                  </tr>
                  <tr>
                    <td>Gestionar la reserva y el recordatorio de la llamada comercial solicitada.</td>
                    <td>Ejecución de medidas precontractuales solicitadas por el interesado.</td>
                  </tr>
                  <tr>
                    <td>Cumplir con obligaciones fiscales, contables y mercantiles aplicables a EVOLVIX GLOBAL, S.L.</td>
                    <td>Cumplimiento de una obligación legal.</td>
                  </tr>
                </tbody>
              </table>

              <h2>4. Plazos de conservación</h2>
              <p>
                Los correos recibidos a través del formulario de contacto se conservan mientras exista una relación comercial activa o
                potencial con el remitente, y en todo caso durante los plazos de prescripción legal aplicables a obligaciones fiscales y
                contractuales. Los datos gestionados a través del widget de reserva de llamada se conservan según la política de retención
                del proveedor tecnológico contratado, sin perjuicio de tu derecho a solicitar su supresión en cualquier momento.
              </p>

              <h2>5. Destinatarios y transferencias internacionales</h2>
              <p>
                Labs24k no vende, cede ni comercializa los datos de sus visitantes o contactos con fines publicitarios de terceros. Los
                datos únicamente se comparten con:
              </p>
              <ul>
                <li>
                  El proveedor tecnológico del widget de reserva de citas (GoHighLevel / software.metatok.ai), que actúa como encargado del
                  tratamiento exclusivamente para la finalidad de gestionar la agenda de llamadas.
                </li>
                <li>Autoridades administrativas, jueces o tribunales, cuando medie una obligación legal o un requerimiento vinculante.</li>
              </ul>
              <p>
                Si el proveedor del widget de reserva transfiere datos fuera del Espacio Económico Europeo, dicha transferencia se realiza
                bajo las garantías previstas por el RGPD (decisión de adecuación de la Comisión Europea o Cláusulas Contractuales Tipo).
              </p>

              <h2>6. Derechos del usuario</h2>
              <p>
                Tienes derecho a acceder, rectificar y suprimir tus datos, así como a solicitar la limitación de su tratamiento, oponerte al
                mismo o ejercer el derecho a la portabilidad. Puedes ejercer estos derechos escribiendo a{" "}
                <a href="mailto:info@labs24k.com">info@labs24k.com</a> indicando el derecho que deseas ejercer, adjuntando una
                acreditación válida de tu identidad.
              </p>
              <p>
                Si consideras que tus derechos en materia de protección de datos han sido desatendidos, puedes presentar una reclamación
                ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
              </p>

              <h2>7. Menores de edad</h2>
              <p>
                Los servicios de Labs24k están dirigidos a empresas y profesionales. No dirigimos este sitio web a menores de edad ni
                recabamos conscientemente datos de menores de 14 años.
              </p>

              <h2>8. Cambios en esta política</h2>
              <p>
                Labs24k podrá modificar esta Política de Privacidad para adaptarla a novedades legislativas o cambios en el sitio web. La
                versión vigente en cada momento será la publicada en esta misma página.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={es.footer} services={services} locale="es" />
    </>
  );
}
