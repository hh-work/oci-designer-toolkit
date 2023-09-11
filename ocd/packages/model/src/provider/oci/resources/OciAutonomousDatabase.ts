/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciAutonomousDatabase"

export interface OciAutonomousDatabase extends AutoGenerated.OciAutonomousDatabase {}

export interface OciCustomerContacts extends AutoGenerated.OciCustomerContacts {}

export namespace OciAutonomousDatabase {
    
    export interface OciCustomerContacts extends AutoGenerated.OciAutonomousDatabase.OciCustomerContacts {}

    export function newResource(type?: string): OciAutonomousDatabase {
        return {
            ...AutoGenerated.OciAutonomousDatabase.newResource('autonomous_database'),
        }
    }
    export function cloneResource(resource: OciAutonomousDatabase, type?: string): OciAutonomousDatabase {
        return AutoGenerated.OciAutonomousDatabase.cloneResource(resource, 'autonomous_database') as OciAutonomousDatabase
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciAutonomousDatabase: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciAutonomousDatabase): string {
        console.debug('OciAutonomousDatabase: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciAutonomousDatabase, parentId: string): OciAutonomousDatabase {
        console.debug('OciAutonomousDatabase: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciAutonomousDatabase): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciAutonomousDatabase: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
    export function newOciCustomerContacts(): OciCustomerContacts {
        return {
            ...AutoGenerated.OciAutonomousDatabase.newOciCustomerContacts(),
        }
    }

}

export class OciAutonomousDatabaseClient {
    static new(): OciAutonomousDatabase {
        return OciAutonomousDatabase.newResource()
    }
    static clone(resource: OciAutonomousDatabase): OciAutonomousDatabase {
        return OciAutonomousDatabase.cloneResource(resource)
    }
}

export default OciAutonomousDatabaseClient
