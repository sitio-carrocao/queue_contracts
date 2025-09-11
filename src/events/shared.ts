import { EventName, QUEUES } from '../queues';
import {
  ILogTypeEventCreateData,
  ILogTypeEventDisableData,
  ILogTypeEventEnableData,
  ILogTypeEventUpdateData,
} from './events';
import { ILogNegotiationCreateByAgencyData } from './negotiations';

export interface IActorMeta {
  actorId: string;
  actorType: 'user' | 'service';
}

export type IEventDataByName = Record<
  typeof QUEUES.LOG_TYPE_EVENT_CREATE,
  ILogTypeEventCreateData
> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_UPDATE, ILogTypeEventUpdateData> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_ENABLE, ILogTypeEventEnableData> &
  Record<typeof QUEUES.LOG_TYPE_EVENT_DISABLE, ILogTypeEventDisableData> &
  Record<
    typeof QUEUES.LOG_NEGOTIATION_CREATE_BY_AGENCY,
    ILogNegotiationCreateByAgencyData
  >;

export type EventData<N extends EventName> = IEventDataByName[N];
