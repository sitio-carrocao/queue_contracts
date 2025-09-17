export const QUEUES = {
  LOG_TYPE_EVENT_CREATE: 'log.typeEvent.create.v1',
  LOG_TYPE_EVENT_DISABLE: 'log.typeEvent.disable.v1',
  LOG_TYPE_EVENT_ENABLE: 'log.typeEvent.enable.v1',
  LOG_TYPE_EVENT_UPDATE: 'log.typeEvent.update.v1',

  LOG_NEGOTIATION_CREATE_BY_AGENCY: 'log.negotiation.create_by_agency.v1',

  LOG_INSTITUTION_CREATE_BY_AGENCY: 'log.institution.create_by_agency.v1',
  LOG_INSTITUTION_UPDATE_BY_AGENCY: 'log.institution.update_by_agency.v1',

  MAIL_INSTITUTION_NOTIFY_WHEN_AGENCY_CREATE_NEGOTIATION:
    'mail.institution.notify_when_agency_create_negotiation.v1',
} as const;

export type QueueName = (typeof QUEUES)[keyof typeof QUEUES];

export type EventName = QueueName;
