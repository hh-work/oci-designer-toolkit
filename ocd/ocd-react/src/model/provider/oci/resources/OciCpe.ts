/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciCpe"

export interface OciCpe extends AutoGenerated.OciCpe {}

export namespace OciCpe {
    export function newResource(type?: string): OciCpe {
        return {
            ...AutoGenerated.OciCpe.newResource('cpe'),
        }
    }
    export function cloneResource(resource: OciCpe, type?: string): OciCpe {
        return AutoGenerated.OciCpe.cloneResource(resource, 'cpe') as OciCpe
    }
    export function getParentId(resource: OciCpe): string {
        console.debug('OciCpe: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciCpe, parentId: string): OciCpe {
        console.debug('OciCpe: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    
}

export class OciCpeClient {
    static new(): OciCpe {
        return OciCpe.newResource()
    }
    static clone(resource: OciCpe): OciCpe {
        return OciCpe.cloneResource(resource)
    }
}

export default OciCpeClient
