/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciPolicy"

export interface OciPolicy extends AutoGenerated.OciPolicy {}

export namespace OciPolicy {
    export function newResource(type?: string): OciPolicy {
        return {
            ...AutoGenerated.OciPolicy.newResource('policy'),
        }
    }
    export function cloneResource(resource: OciPolicy, type?: string): OciPolicy {
        return AutoGenerated.OciPolicy.cloneResource(resource, 'policy') as OciPolicy
    }
    
}

export class OciPolicyClient {
    static new(): OciPolicy {
        return OciPolicy.newResource()
    }
    static clone(resource: OciPolicy): OciPolicy {
        return OciPolicy.cloneResource(resource)
    }
}

export default OciPolicyClient