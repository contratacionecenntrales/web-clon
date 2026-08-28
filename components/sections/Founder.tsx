import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/es";

export function Founder({ dict }: { dict: Dictionary["founder"] }) {
  return (
    <section className="founder" id="nosotros">
        <div className="container founder__inner">
          <div className="founder__photo reveal">
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop&crop=faces"
              alt={dict.imgAlt}
              width={600}
              height={750}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="founder__photo-caption">
              <p>{dict.captionRole}</p>
              <span>{dict.captionName}</span>
            </div>
          </div>
          <div className="founder__content reveal" data-reveal-delay="100">
            <span className="label-light">{dict.label}</span>
            <h2 className="display-title">{dict.heading}</h2>
            <p className="section-subtext">{dict.subtext}</p>
            <p className="founder__bio">{dict.bio}</p>
            <ul className="check-list check-list--blue">
              {dict.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="https://www.linkedin.com/company/labs24k" target="_blank" rel="noopener noreferrer" className="link-arrow">{dict.linkedin}</a>
          </div>
        </div>
      </section>
  );
}
