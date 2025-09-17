export const QUEUES = {
  LOG_TYPE_EVENT_CREATE: 'log.typeEvent.create.v1',
  LOG_TYPE_EVENT_DISABLE: 'log.typeEvent.disable.v1',
  LOG_TYPE_EVENT_ENABLE: 'log.typeEvent.enable.v1',
  LOG_TYPE_EVENT_UPDATE: 'log.typeEvent.update.v1',

  LOG_NEGOTIATION_CREATED_BY_AGENCY: 'log.negotiation.created_by_agency.v1',

  LOG_INSTITUTION_CREATED_BY_AGENCY: 'log.institution.created_by_agency.v1',
  LOG_INSTITUTION_UPDATED_BY_AGENCY: 'log.institution.updated_by_agency.v1',
  LOG_INSTITUTION_MAIL_NEGOTIATION_CREATED_BY_AGENCY_SENT:
    'log.institution.mail_negotiation_created_by_agency_sent.v1',

  MAIL_AGENCY_NEGOTIATION_CREATED: 'mail.agency.negotiation_created.v1',

  MAIL_INSTITUTION_NEGOTIATION_CREATED_BY_AGENCY:
    'mail.institution.negotiation_created_by_agency.v1',
} as const;

export type QueueName = (typeof QUEUES)[keyof typeof QUEUES];

export type EventName = QueueName;
