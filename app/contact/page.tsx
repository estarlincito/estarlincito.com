import type { Metadata } from "next";
import Link from "next/link";
import Contents from "../components/layout/Contents";
import Title from "../components/layout/Title";
import Wrapper from "../components/layout/Wrapper";

export const metadata: Metadata = {
  title: "Contacto | Estarlincito",
  description: "Desarrollador Web, escritor y creador.",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <Title text="Ponte en contacto conmigo" />
      <p className="italic text-sm text-center text-neutral-600 dark:text-neutral-400 mt-5">
        ¡Construyamos algo juntos!
      </p>
      <Contents>
        <p className="my-5 py">
          Si está buscando ayuda para construir algo que tenga un impacto y le
          importa la sostenibilidad y la inclusión, hablemos&nbsp;
          <span role="img" aria-label="Levantando las manos">
            🙌
          </span>
        </p>
        <p>Envíame un correo electrónico a:</p>
        <Link
          href="mailto:contacto@estarlincito.com"
          className="font-bold text-lg my-6"
        >
          contacto@estarlincito.com
        </Link>

        <p className="my-5">
          Siempre estoy aprendiendo y explorando. Con mi experiencia como
          Diseñador web, puedo ayudarle a materializar sus ideas innovadoras con
          Información, análisis y monitoreo tecnológico completos.
        </p>
        <p className="my-5">
          En general, mi trabajo se centra en la consulta, la innovación,
          solución de problemas tecnológicos y la educación:
        </p>
        <ul>
          <li>- Diseñador Web</li>
          <li>- Soporte Técnico</li>
          <li>- Hacker Ético</li>
          <li>- Educador Tecnológico</li>
        </ul>

        <p className="italic my-5">
          Si solo quieres saludar, Hazme un ping&nbsp;
          <Link
            className="underline font-bold"
            href="https://twitter.com/estarlincito"
            target="_blank"
          >
            Twitter
          </Link>
          !
        </p>
      </Contents>
    </Wrapper>
  );
};

export default ContactPage;
