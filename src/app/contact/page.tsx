import { Linkdoc, Blockquote, Title } from '@/components/HOC';
import { SEO, descriptions } from '@/lib';

//SEO
export const { metadata } = new SEO({
  title: 'Estarlincito | Contácto',
  description: descriptions('contact'),
  openGraph: { type: 'website', url: 'https://estarlincito.com/contact' },
  imagesUrl: 'https://estarlincito.com/images/avatar.jpeg',
  imagesAlt: 'Avathar',
});

const ContactPage = () => {
  return (
    <section className='flex flex-col gap-y-5'>
      <div>
        <Title text='Ponte en contacto conmigo' size='text-3xl' />
        <Blockquote>¡Construyamos algo juntos!</Blockquote>
      </div>

      <p>
        Si está buscando ayuda para construir algo que tenga un impacto y
        sostenibilidad, hablemos&nbsp;
        <span role='img' aria-label='Levantando las manos'>
          🙌
        </span>
      </p>

      <p>
        Envíame un correo electrónico a:
        <br />
        <Linkdoc href='mailto:contacto@estarlincito.com' target='_self'>
          contacto@estarlincito.com
        </Linkdoc>
      </p>

      <p>
        Siempre estoy aprendiendo y explorando. Con mi experiencia como
        Diseñador web, puedo ayudarte a materializar tus ideas innovadoras con
        Información, análisis y monitoreo tecnológico completos.
      </p>

      <p>
        En general, mi trabajo se centra en la consulta, la innovación, solución
        de problemas tecnológicos y la educación:
      </p>

      <ul>
        <li>- Diseñador Web</li>
        <li>- Soporte Técnico</li>
        <li>- Hacker Ético</li>
        <li>- Educador Tecnológico</li>
      </ul>

      <p>
        Si solo quieres saludar, Hazme un&nbsp;
        <Linkdoc href='https://twitter.com/estarlincito' target='_blank'>
          Tweet!
        </Linkdoc>
      </p>
    </section>
  );
};

export default ContactPage;
