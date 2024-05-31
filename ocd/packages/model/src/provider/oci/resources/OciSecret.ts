/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciSecret"

export interface OciSecret extends AutoGenerated.OciSecret {}

export namespace OciSecret {
    export namespace SecretContent {
        export interface SecretContent extends AutoGenerated.OciSecret.SecretContent.SecretContent {}
        export function newSecretContent(): SecretContent {return AutoGenerated.OciSecret.SecretContent.newSecretContent()}
        
    }
    export function newResource(type?: string): OciSecret {
        const resource = {
            ...AutoGenerated.OciSecret.newResource('secret'),
        }
        return resource
    }
    export function cloneResource(resource: OciSecret, type?: string): OciSecret {
        return AutoGenerated.OciSecret.cloneResource(resource, 'secret') as OciSecret
    }
    export function allowedParentTypes(): string[] {
        return ['Vault']
    }
    export function getParentId(resource: OciSecret): string {
        const parentId = resource.vaultId ? resource.vaultId : resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciSecret, parentId: string): OciSecret {
        resource.vaultId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciSecret, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciSecretClient extends AutoGenerated.OciSecretClient {
    static new(): OciSecret {
        return OciSecret.newResource()
    }
    static clone(resource: OciSecret): OciSecret {
        return OciSecret.cloneResource(resource)
    }
}

export default OciSecretClient