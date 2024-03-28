/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciPolicy"

export interface OciPolicy extends AutoGenerated.OciPolicy {}

export namespace OciPolicy {
    
    export function newResource(type?: string): OciPolicy {
        const resource = {
            ...AutoGenerated.OciPolicy.newResource('policy'),
        }
        return resource
    }
    export function cloneResource(resource: OciPolicy, type?: string): OciPolicy {
        return AutoGenerated.OciPolicy.cloneResource(resource, 'policy') as OciPolicy
    }
    export function allowedParentTypes(): string[] {
        return []
    }
    export function getParentId(resource: OciPolicy): string {
        const parentId = resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciPolicy, parentId: string): OciPolicy {
        return resource
    }
    export function getConnectionIds(resource: OciPolicy, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciPolicyClient extends AutoGenerated.OciPolicyClient {
    static new(): OciPolicy {
        return OciPolicy.newResource()
    }
    static clone(resource: OciPolicy): OciPolicy {
        return OciPolicy.cloneResource(resource)
    }
}

export default OciPolicyClient
