import { EventName } from '../queues.js';
import { IMailAgencyNegotiationCreatedData } from './agencies/mails.js';
import {
  ILogInstitutionCreatedByAgencyData,
  ILogInstitutionUpdatedByAgencyData,
  ILogMailNegotiationCreatedByAgencySentToInstitutionData,
} from './institutions/logs.js';
import { IMailInstitutionNegotiationCreatedByAgencyData } from './institutions/mails.js';
import { ILogNegotiationCreatedByAgencyData } from './negotiations/logs.js';

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
  'log.institution.created_by_agency.v1': ILogInstitutionCreatedByAgencyData;
  'log.institution.mail_negotiation_created_by_agency_sent.v1': ILogMailNegotiationCreatedByAgencySentToInstitutionData;
  'log.institution.updated_by_agency.v1': ILogInstitutionUpdatedByAgencyData;

  'log.negotiation.created_by_agency.v1': ILogNegotiationCreatedByAgencyData;

  'mail.agency.negotiation_created.v1': IMailAgencyNegotiationCreatedData;

  'mail.institution.negotiation_created_by_agency.v1': IMailInstitutionNegotiationCreatedByAgencyData;
}

export type EventData<N extends EventName> = IEventDataByName[N];
