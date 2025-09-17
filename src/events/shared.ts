import { EventName } from '../queues';
import {
  ILogTypeEventCreateData,
  ILogTypeEventDisableData,
  ILogTypeEventEnableData,
  ILogTypeEventUpdateData,
} from './events';
import {
  ILogInstitutionCreateByAgencyData,
  ILogInstitutionUpdateByAgencyData,
  IMailInstitutionNotifyWhenAgencyCreateNegotiation,
} from './institutions';
import { ILogNegotiationCreateByAgencyData } from './negotiations';

export interface IActorMeta {
  actorId: string;
  actorName: string;
  actorType: 'user' | 'service';
}

export interface IFromMeta {
  from: 'SITIO_CARROCAO';
  to: string;
}

export interface IEventDataByName {
  'log.institution.create_by_agency.v1': ILogInstitutionCreateByAgencyData;
  'log.institution.update_by_agency.v1': ILogInstitutionUpdateByAgencyData;
  'log.negotiation.create_by_agency.v1': ILogNegotiationCreateByAgencyData;

  'log.typeEvent.create.v1': ILogTypeEventCreateData;

  'log.typeEvent.disable.v1': ILogTypeEventDisableData;
  'log.typeEvent.enable.v1': ILogTypeEventEnableData;

  'log.typeEvent.update.v1': ILogTypeEventUpdateData;

  'mail.institution.notify_when_agency_create_negotiation.v1': IMailInstitutionNotifyWhenAgencyCreateNegotiation;
}

export type EventData<N extends EventName> = IEventDataByName[N];
