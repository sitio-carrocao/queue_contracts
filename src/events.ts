import type { EventName, QUEUES } from './queues';

export enum ETypeEventStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

export interface IEventTypeSnapshot {
  description?: string;
  id: string;
  name: string;
  status: ETypeEventStatus;
}

export interface IActorMeta {
  actorId: string;
  actorType?: 'user' | 'service';
}

export interface ILogTypeEventCreateData extends IActorMeta {
  after: IEventTypeSnapshot;
  at: string;
}

export interface ILogTypeEventUpdateData extends IActorMeta {
  after?: Partial<IEventTypeSnapshot>;
  at: string;
  before?: Partial<IEventTypeSnapshot>;
  id: string;
}

export interface ILogTypeEventEnableData extends IActorMeta {
  after: Pick<IEventTypeSnapshot, 'status'>;
  at: string;
  before: Pick<IEventTypeSnapshot, 'status'>;
  id: string;
}

export interface ILogTypeEventDisableData extends IActorMeta {
  after: Pick<IEventTypeSnapshot, 'status'>;
  at: string;
  before: Pick<IEventTypeSnapshot, 'status'>;
  id: string;
}

export interface IEventDataByName {
  [QUEUES.LOG_TYPE_EVENT_CREATE]: ILogTypeEventCreateData;
  [QUEUES.LOG_TYPE_EVENT_DISABLE]: ILogTypeEventDisableData;
  [QUEUES.LOG_TYPE_EVENT_ENABLE]: ILogTypeEventEnableData;
  [QUEUES.LOG_TYPE_EVENT_UPDATE]: ILogTypeEventUpdateData;
}

export type EventData<N extends EventName> = IEventDataByName[N];
