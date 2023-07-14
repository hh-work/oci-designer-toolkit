/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciSubnet"

export interface OciSubnet extends AutoGenerated.OciSubnet {}

export namespace OciSubnet {
    export function newResource(type?: string): OciSubnet {
        return {
            ...AutoGenerated.OciSubnet.newResource('subnet'),
        }
    }
    export function cloneResource(resource: OciSubnet, type?: string): OciSubnet {
        return AutoGenerated.OciSubnet.cloneResource(resource, 'subnet') as OciSubnet
    }
    export function getParentId(resource: OciSubnet): string {
        console.debug('OciSubnet: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.vcnId !== '' ? resource.vcnId : resource.compartmentId
    }
    export function setParentId(resource: OciSubnet, parentId: string): OciSubnet {
        console.debug('OciSubnet: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        resource.vcnId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciSubnet): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciSubnet: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
}

export class OciSubnetClient {
    static new(): OciSubnet {
        return OciSubnet.newResource()
    }
    static clone(resource: OciSubnet): OciSubnet {
        return OciSubnet.cloneResource(resource)
    }
}

export default OciSubnetClient
