import { IActorMeta } from '../shared.js';

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

export interface ILogInstitutionCreatedByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  entityId: string;
}

export interface ILogInstitutionUpdatedByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  before: IInstitutionSnapshot;
  entityId: string;
}

export interface ILogMailNegotiationCreatedByAgencySentToInstitutionData
  extends IActorMeta {
  at: string;
  entityId: string;
}
