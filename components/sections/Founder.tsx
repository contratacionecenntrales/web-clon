import Image from "next/image";

export function Founder() {
  return (
    <section className="founder" id="nosotros">
        <div className="container founder__inner">
          <div className="founder__photo reveal">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop&crop=faces"
              alt="Equipo directivo de Labs24k"
              width={600}
              height={750}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="founder__photo-caption">
              <p>Equipo fundador</p>
              <span>Labs24k</span>
            </div>
          </div>
          <div className="founder__content reveal" data-reveal-delay="100">
            <span className="label-light">Liderado por</span>
            <h2 className="display-title">Detrás de cada proyecto, un equipo que firma con su nombre</h2>
            <p className="section-subtext">Trabajar con Labs24k no es contratar una marca. Es contar con un equipo dirigido por personas concretas que responden, ejecutan y firman con su nombre.</p>
            <p className="founder__bio">Lideramos la estrategia, las relaciones con clientes y la ejecución de proyectos, con foco en innovación, crecimiento y tecnología aplicada a resultados de negocio reales.</p>
            <ul className="check-list check-list--blue">
              <li>Equipo especializado en IA aplicada a empresa</li>
              <li>Proyectos multisectoriales de innovación y tecnología</li>
              <li>Acompañamiento de principio a fin, sin intermediarios</li>
            </ul>
            <a href="https://www.linkedin.com/company/labs24k" target="_blank" rel="noopener noreferrer" className="link-arrow">Ver perfil en LinkedIn →</a>
          </div>
        </div>
      </section>
  );
}
