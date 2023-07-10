/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciLocalPeeringGateway"

export interface OciLocalPeeringGateway extends AutoGenerated.OciLocalPeeringGateway {}

export namespace OciLocalPeeringGateway {
    export function newResource(type?: string): OciLocalPeeringGateway {
        return {
            ...AutoGenerated.OciLocalPeeringGateway.newResource('local_peering_gateway'),
        }
    }
    export function cloneResource(resource: OciLocalPeeringGateway, type?: string): OciLocalPeeringGateway {
        return AutoGenerated.OciLocalPeeringGateway.cloneResource(resource, 'local_peering_gateway') as OciLocalPeeringGateway
    }
    
}

export class OciLocalPeeringGatewayClient {
    static new(): OciLocalPeeringGateway {
        return OciLocalPeeringGateway.newResource()
    }
    static clone(resource: OciLocalPeeringGateway): OciLocalPeeringGateway {
        return OciLocalPeeringGateway.cloneResource(resource)
    }
}

export default OciLocalPeeringGatewayClient