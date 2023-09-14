/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciInternetGateway"

export interface OciInternetGateway extends AutoGenerated.OciInternetGateway {}

export namespace OciInternetGateway {
    
    export function newResource(type?: string): OciInternetGateway {
        return {
            ...AutoGenerated.OciInternetGateway.newResource('internet_gateway'),
        }
    }
    export function cloneResource(resource: OciInternetGateway, type?: string): OciInternetGateway {
        return AutoGenerated.OciInternetGateway.cloneResource(resource, 'internet_gateway') as OciInternetGateway
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciInternetGateway: Allowed Parent Types')
        return ['Vcn']
    }
    export function getParentId(resource: OciInternetGateway): string {
        console.debug('OciInternetGateway: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.vcnId
    }
    export function setParentId(resource: OciInternetGateway, parentId: string): OciInternetGateway {
        console.debug('OciInternetGateway: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        resource.vcnId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciInternetGateway): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciInternetGateway: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
}

export class OciInternetGatewayClient {
    static new(): OciInternetGateway {
        return OciInternetGateway.newResource()
    }
    static clone(resource: OciInternetGateway): OciInternetGateway {
        return OciInternetGateway.cloneResource(resource)
    }
}

export default OciInternetGatewayClient