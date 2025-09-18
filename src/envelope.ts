import type { IEventDataByName } from './events/shared.js';
import type { EventName } from './queues.js';

export enum EBackend {
  API_EVENTOS = 'API_EVENTOS',
  MAILER = 'MAILER',
}

export enum EFrontend {
  AGENCIA = 'AGENCIA',
}

export interface IEventEnvelope<N extends EventName = EventName> {
  backend: EBackend;
  data: IEventDataByName[N];
  frontend: EFrontend;
  id: string;
  occurredAt: string;
  type: N;
  version: 'v1';
}
