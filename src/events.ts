import type { EventName, QUEUES } from './queues.js';

export enum ETypeEventStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

export interface IEventTypeSnapshot {
  description: string;
  id: string;
  status: ETypeEventStatus;
}

export interface IActorMeta {
  actorId: string;
  actorType: 'user' | 'service';
}

export interface ILogTypeEventCreateData extends IActorMeta {
  after: IEventTypeSnapshot;
  at: string;
  entityId: string;
}

export interface ILogTypeEventUpdateData extends IActorMeta {
  after?: Partial<IEventTypeSnapshot>;
  at: string;
  before?: Partial<IEventTypeSnapshot>;
  entityId: string;
}

export interface ILogTypeEventEnableData extends IActorMeta {
  after: Pick<IEventTypeSnapshot, 'status'>;
  at: string;
  before: Pick<IEventTypeSnapshot, 'status'>;
  entityId: string;
}

export interface ILogTypeEventDisableData extends IActorMeta {
  after: Pick<IEventTypeSnapshot, 'status'>;
  at: string;
  before: Pick<IEventTypeSnapshot, 'status'>;
  entityId: string;
}

export type IEventDataByName = Record<
  typeof QUEUES.LOG_TYPE_EVENT_CREATE,
  ILogTypeEventCreateData
> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_UPDATE, ILogTypeEventUpdateData> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_ENABLE, ILogTypeEventEnableData> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_DISABLE, ILogTypeEventDisableData>;

export type EventData<N extends EventName> = IEventDataByName[N];
