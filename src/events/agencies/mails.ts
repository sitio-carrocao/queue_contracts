import { IFromMeta } from '../shared.js';

export interface IMailAgencyNegotiationCreatedData extends IFromMeta {
  data: {
    AGENCIA_PLATAFORMA_URL: string;
    INSTITUICAO_NOME_FANTASIA: string;
  };
}
