import { IActorMeta } from './shared.js';

export interface IInstitutionSnapshot {
  addressCity: string;
  addressComplement: string | null;
  addressNeighborhood: string;
  addressNumber: string;
  addressPostalCode: string;
  addressState: string;
  addressStreet: string;
  cnpj: string;
  corporateName: string;
  email: string;
  fantasyName: string;
  id: string;
  passwordHash: string;
  phone: string;
  responsibleName: string;
  responsibleRole: string;
}

export interface ILogInstitutionCreateByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  entityId: string;
}

export interface ILogInstitutionUpdateByAgencyData extends IActorMeta {
  after: IInstitutionSnapshot;
  at: string;
  entityId: string;
}
