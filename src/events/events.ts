import { IActorMeta } from './shared.js';

export enum ETypeEventStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
}

export interface IEventTypeSnapshot {
  description: string;
  id: string;
  status: ETypeEventStatus;
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
