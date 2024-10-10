// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Condominios, ConvencoesRegulamentos, DadosEstruturais } = initSchema(schema);

export {
  Condominios,
  ConvencoesRegulamentos,
  DadosEstruturais
};