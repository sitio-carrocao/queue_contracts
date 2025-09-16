import { EventName, QUEUES } from '../queues';
import {
  ILogTypeEventCreateData,
  ILogTypeEventDisableData,
  ILogTypeEventEnableData,
  ILogTypeEventUpdateData,
} from './events';
import {
  ILogInstitutionCreateByAgencyData,
  ILogInstitutionUpdateByAgencyData,
} from './institutions';
import { ILogNegotiationCreateByAgencyData } from './negotiations';

export interface IActorMeta {
  actorId: string;
  actorType: 'user' | 'service';
}

export interface IEventDataByName {
  [QUEUES.LOG_TYPE_EVENT_CREATE]: ILogTypeEventCreateData;
  [QUEUES.LOG_TYPE_EVENT_UPDATE]: ILogTypeEventUpdateData;
  [QUEUES.LOG_TYPE_EVENT_ENABLE]: ILogTypeEventEnableData;
  [QUEUES.LOG_TYPE_EVENT_DISABLE]: ILogTypeEventDisableData;

  [QUEUES.LOG_NEGOTIATION_CREATE_BY_AGENCY]: ILogNegotiationCreateByAgencyData;

  [QUEUES.LOG_INSTITUTION_CREATE_BY_AGENCY]: ILogInstitutionCreateByAgencyData;
  [QUEUES.LOG_INSTITUTION_UPDATE_BY_AGENCY]: ILogInstitutionUpdateByAgencyData[];
}

export type EventData<N extends EventName> = IEventDataByName[N];
