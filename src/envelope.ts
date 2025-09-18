import type { IEventDataByName } from './events/shared.js';
import type { EventName } from './queues.js';

export interface IEventEnvelope<N extends EventName = EventName> {
  backend: 'API_EVENTOS' | 'MAILER';
  data: IEventDataByName[N];
  frontend: 'AGENCIA';
  id: string;
  occurredAt: string;
  type: N;
  version: 'v1';
}
