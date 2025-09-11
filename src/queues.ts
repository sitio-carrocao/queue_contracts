export const QUEUES = {
  LOG_TYPE_EVENT_CREATE: 'log.typeEvent.create.v1',
  LOG_TYPE_EVENT_DISABLE: 'log.typeEvent.disable.v1',
  LOG_TYPE_EVENT_ENABLE: 'log.typeEvent.enable.v1',
  LOG_TYPE_EVENT_UPDATE: 'log.typeEvent.update.v1',

  LOG_NEGOTIATION_CREATE_BY_AGENCY: 'log.negotiation.create_by_agency.v1',
} as const;

export type QueueName = (typeof QUEUES)[keyof typeof QUEUES];

export type EventName = QueueName;
