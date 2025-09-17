import { IFromMeta } from '../shared.js';

export interface IMailInstitutionNegotiationCreatedByAgencyData
  extends IFromMeta {
  data: {
    AGENCIA_NOME_FANTASIA: string;
    INSTITUICAO_EMAIL: string;
    INSTITUICAO_PLATAFORMA_URL: string;
    INSTITUICAO_SENHA: string;
  };
  isNewInstitution: boolean;
}
