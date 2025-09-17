import { IActorMeta } from './shared.js';

export interface IInstitutionSnapshot {
  addressCity: string | null;
  addressComplement: string | null;
  addressNeighborhood: string | null;
  addressNumber: string | null;
  addressPostalCode: string | null;
  addressState: string | null;
  addressStreet: string | null;
  cnpj: string | null;
  corporateName: string | null;
  email: string;
  fantasyName: string;
  id: string;
  passwordHash?: string;
  phone: string;
  responsibleName: string | null;
  responsibleRole: string | null;
}

export interface ILogInstitutionCreateByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  entityId: string;
}

export interface ILogInstitutionUpdateByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  before: IInstitutionSnapshot;
  entityId: string;
}

export interface IMailInstitutionNotifyWhenAgencyCreateNegotiation {
  data: {
    AGENCIA_PLATAFORMA_URL: string;
    INSTITUICAO_EMAIL: string;
    INSTITUICAO_NOME_FANTASIA: string;
    INSTITUICAO_SENHA: string;
  };
  isNewInstitution: boolean;
  to: string;
}
