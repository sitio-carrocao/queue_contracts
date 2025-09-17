export { QUEUES } from './queues.js';

export type { EventName, QueueName } from './queues.js';

export type {
  EventData,
  IActorMeta,
  IEventDataByName,
  IFromMeta,
} from './events/shared.js';

export type { IMailAgencyNegotiationCreatedData } from './events/agencies/mails.js';

export type {
  IEventTypeSnapshot,
  ILogTypeEventCreateData,
  ILogTypeEventDisableData,
  ILogTypeEventEnableData,
  ILogTypeEventUpdateData,
} from './events/events.js';

export type {
  ILogNegotiationCreatedByAgencyData,
  INegotiationSnapshot,
} from './events/negotiations.js';

export type {
  IInstitutionSnapshot,
  ILogInstitutionCreatedByAgencyData,
  ILogInstitutionUpdatedByAgencyData,
  ILogMailNegotiationCreatedByAgencySentToInstitutionData,
} from './events/institutions/logs.js';

export type { IMailInstitutionNegotiationCreatedByAgencyData } from './events/institutions/mails.js';

export type { IEventEnvelope } from './envelope.js';
