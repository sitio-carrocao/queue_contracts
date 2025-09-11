import { IActorMeta } from './shared.js';

export interface INegotiationSnapshot {
  id: string;
}

export interface ILogNegotiationCreateByAgencyData extends IActorMeta {
  after: INegotiationSnapshot;
  at: string;
  entityId: string;
}
