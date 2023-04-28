import { Description } from '@/types';
import { base } from './base';
import { Filosofia } from './filosofia';
import { Finanzas } from './finanzas';
import { Psicologia } from './psicologia';
import { Tecnologia } from './tecnologia';

export class Descriptions {
  static base = base;
  static tecnologia = Tecnologia;
  static psicologia = Psicologia;
  static filosofia = Filosofia;
  static finanzas = Finanzas;
}
