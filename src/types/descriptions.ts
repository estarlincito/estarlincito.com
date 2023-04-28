import { base } from '../lib/descriptions/base';
import { Filosofia } from '../lib/descriptions/filosofia';
import { Finanzas } from '../lib/descriptions/finanzas';
import { Psicologia } from '../lib/descriptions/psicologia';
import { Tecnologia } from '../lib/descriptions/tecnologia';

export type Description =
  | typeof base.app
  | typeof base.blog
  | typeof base.tags
  | typeof base.tag
  | typeof base.about
  | typeof base.contact
  | typeof base.noFound
  //Tecnología
  | typeof Tecnologia.base
  | typeof Tecnologia.Smartphone
  | typeof Tecnologia.Diseñoweb
  | typeof Tecnologia.Desarrolloweb
  | typeof Tecnologia.Desarrollodesoftware
  //Psicología
  | typeof Psicologia.base
  | typeof Psicologia.Psicologíacrítica
  | typeof Psicologia.Psicologíapositiva
  //Filosofía
  | typeof Filosofia.base
  | typeof Filosofia.Filosofíadelareligión
  //Finanzas
  | typeof Finanzas.base
  | typeof Finanzas.Inversiónes;
