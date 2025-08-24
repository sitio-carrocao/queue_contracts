import type { IEventDataByName } from './events.js';
import type { EventName } from './queues.js';

export interface IEventEnvelope<N extends EventName = EventName> {
  data: IEventDataByName[N];
  id: string;
  occurredAt: string;
  type: N;
  version: 'v1';
}
