/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciBootVolume"

export interface OciBootVolume extends AutoGenerated.OciBootVolume {}

export interface OciAutotunePolicies extends AutoGenerated.OciAutotunePolicies {}

export interface OciBootVolumeReplicas extends AutoGenerated.OciBootVolumeReplicas {}

export interface OciSourceDetails extends AutoGenerated.OciSourceDetails {}

export namespace OciBootVolume {
    
    export interface OciAutotunePolicies extends AutoGenerated.OciBootVolume.OciAutotunePolicies {}

    export interface OciBootVolumeReplicas extends AutoGenerated.OciBootVolume.OciBootVolumeReplicas {}

    export interface OciSourceDetails extends AutoGenerated.OciBootVolume.OciSourceDetails {}

    export function newResource(type?: string): OciBootVolume {
        return {
            ...AutoGenerated.OciBootVolume.newResource('boot_volume'),
        }
    }
    export function cloneResource(resource: OciBootVolume, type?: string): OciBootVolume {
        return AutoGenerated.OciBootVolume.cloneResource(resource, 'boot_volume') as OciBootVolume
    }
    export function allowedParentTypes(): string[] {
        // console.debug('OciBootVolume: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciBootVolume): string {
        // console.debug('OciBootVolume: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciBootVolume, parentId: string): OciBootVolume {
        // console.debug('OciBootVolume: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciBootVolume, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        // console.debug('OciBootVolume: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
    export function newOciAutotunePolicies(): OciAutotunePolicies {
        return {
            ...AutoGenerated.OciBootVolume.newOciAutotunePolicies(),
        }
    }

    export function newOciBootVolumeReplicas(): OciBootVolumeReplicas {
        return {
            ...AutoGenerated.OciBootVolume.newOciBootVolumeReplicas(),
        }
    }

    export function newOciSourceDetails(): OciSourceDetails {
        return {
            ...AutoGenerated.OciBootVolume.newOciSourceDetails(),
        }
    }

}

export class OciBootVolumeClient {
    static new(): OciBootVolume {
        return OciBootVolume.newResource()
    }
    static clone(resource: OciBootVolume): OciBootVolume {
        return OciBootVolume.cloneResource(resource)
    }
}

export default OciBootVolumeClient
