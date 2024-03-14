/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciFileSystemExport"

export interface OciFileSystemExport extends AutoGenerated.OciFileSystemExport {}

export interface OciExportOptions extends AutoGenerated.OciExportOptions {}

export namespace OciFileSystemExport {
    
    export interface OciExportOptions extends AutoGenerated.OciFileSystemExport.OciExportOptions {}

    export function newResource(type?: string): OciFileSystemExport {
        return {
            ...AutoGenerated.OciFileSystemExport.newResource('file_system_export'),
        }
    }
    export function cloneResource(resource: OciFileSystemExport, type?: string): OciFileSystemExport {
        return AutoGenerated.OciFileSystemExport.cloneResource(resource, 'file_system_export') as OciFileSystemExport
    }
    export function allowedParentTypes(): string[] {
        // console.debug('OciFileSystemExport: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciFileSystemExport): string {
        // console.debug('OciFileSystemExport: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciFileSystemExport, parentId: string): OciFileSystemExport {
        // console.debug('OciFileSystemExport: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciFileSystemExport, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        // console.debug('OciFileSystemExport: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
    export function newOciExportOptions(): OciExportOptions {
        return {
            ...AutoGenerated.OciFileSystemExport.newOciExportOptions(),
        }
    }

}

export class OciFileSystemExportClient {
    static new(): OciFileSystemExport {
        return OciFileSystemExport.newResource()
    }
    static clone(resource: OciFileSystemExport): OciFileSystemExport {
        return OciFileSystemExport.cloneResource(resource)
    }
}

export default OciFileSystemExportClient
