import { IActorMeta } from './shared.js';

export interface IInstitutionSnapshot {
  id: string;
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
