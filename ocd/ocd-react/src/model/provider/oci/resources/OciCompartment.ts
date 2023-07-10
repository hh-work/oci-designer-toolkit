/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciCompartment"

export interface OciCompartment extends AutoGenerated.OciCompartment {}

export namespace OciCompartment {
    export function newResource(type?: string): OciCompartment {
        return {
            ...AutoGenerated.OciCompartment.newResource('compartment'),
        }
    }
    export function cloneResource(resource: OciCompartment, type?: string): OciCompartment {
        return AutoGenerated.OciCompartment.cloneResource(resource, 'compartment') as OciCompartment
    }
    
}

export class OciCompartmentClient {
    static new(): OciCompartment {
        return OciCompartment.newResource()
    }
    static clone(resource: OciCompartment): OciCompartment {
        return OciCompartment.cloneResource(resource)
    }
}

export default OciCompartmentClient