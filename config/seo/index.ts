import { Filosofia } from './filosofia';
import { Finanzas } from './finanzas';
import { Psicologia } from './psicologia';
import { Relaciones } from './relaciones';
import { Tecnologia } from './tecnologia';

const content = {
  ...Tecnologia,
  ...Psicologia,
  ...Filosofia,
  ...Finanzas,
  ...Relaciones,
};

enum Conten {
  'Tecnología' = 'Tecnología',
  'Smartphone' = 'Smartphone',
  'Diseño web' = 'Diseño web',
  'Desarrollo web' = 'Desarrollo web',
  'Desarrollo de software' = 'Desarrollo de software',
  'Psicología' = 'Psicología',
  'Psicología crítica' = 'Psicología crítica',
  'Psicología positiva' = 'Psicología positiva',
  'Filosofía' = 'Filosofía',
  'Filosofía de la religión' = 'Filosofía de la religión',
  'Finanzas' = 'Finanzas',
  'Finanzas Personales' = 'Finanzas Personales',
  'Relaciones' = 'Relaciones',
  'Pareja' = 'Pareja',
}

const seo = (prop: string) => {
  const doc = content[prop as Conten];

  if (doc === undefined) {
    throw new Error('This properties not fount on descriptions');
  }

  return doc;
};

export default seo;
