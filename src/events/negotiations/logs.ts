import { IActorMeta } from '../shared.js';

export interface INegotiationSnapshot {
  age: string;
  agencyId: string;
  id: string;
  institutionId: string;
  negotiationPackageId: string;
  observation: string | null;
  quantityPeopleForecast: string;
  quantityPeopleMax: string;
  quantityPeopleMin: string;
  schoolYear: string;
  status: string;
  visit: string;
  year: string;
}

export interface ILogNegotiationCreatedByAgencyData extends IActorMeta {
  after: INegotiationSnapshot;
  at: string;
  entityId: string;
}
