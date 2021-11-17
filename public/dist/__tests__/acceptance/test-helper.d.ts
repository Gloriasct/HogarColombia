import { Client } from '@loopback/testlab';
import { hogarColombiaApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: hogarColombiaApplication;
    client: Client;
}
