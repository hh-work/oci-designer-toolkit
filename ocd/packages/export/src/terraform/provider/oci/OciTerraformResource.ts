/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdTerraformResource from "../../OcdTerraformResource"
import { OciModelResources as Model, OciResource } from '@ocd/model'

export class OciTerraformResource extends OcdTerraformResource {
    typeDisplayNameMap: Record<string, string> = {
        Compartment: 'name'
    }
    isHomeRegion: boolean
    constructor(idTFResourceMap={}, isHomeRegion: boolean = false) {
        super(idTFResourceMap)
        this.isHomeRegion = isHomeRegion
    }
    commonAssignments = (resource: OciResource) => {
        console.debug('OciTerraformResource:', resource, resource.resourceType, this.typeDisplayNameMap, this.typeDisplayNameMap.hasOwnProperty(resource.resourceType))
        return `${this.isHomeRegion ? 'provider       = oci.home_region' : ''}
    ${resource.compartmentId && resource.compartmentId !== '' ? this.generateReferenceAttribute("compartment_id", resource.compartmentId, true) : 'compartment_id = var.compartment_ocid'}
    ${this.generateTextAttribute(this.typeDisplayNameMap.hasOwnProperty(resource.resourceType) ? this.typeDisplayNameMap[resource.resourceType] : 'display_name', resource.displayName, true)}
`

    }
}

export default OciTerraformResource
