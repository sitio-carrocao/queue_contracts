import type { IEventDataByName } from './events.js';
import type { EventName } from './queues.js';

export interface IEventEnvelope<N extends EventName = EventName> {
  backend: 'API_BACKOFFICE' | 'API_EVENTOS' | 'API_NEGOCIACAO';
  data: IEventDataByName[N];
  frontend: 'AGENCIA' | 'BACKOFFICE' | 'INSTITUICAO';
  id: string;
  occurredAt: string;
  type: N;
  version: 'v1';
}
