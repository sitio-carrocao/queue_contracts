import type { IEventDataByName } from './events';
import type { EventName } from './queues';

export interface IEventEnvelope<N extends EventName = EventName> {
  data: IEventDataByName[N];
  id: string;
  occurredAt: string;
  type: N;
  version: 'v1';
}
