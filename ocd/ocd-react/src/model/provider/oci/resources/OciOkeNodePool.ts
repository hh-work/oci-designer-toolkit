/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciOkeNodePool"

export interface OciOkeNodePool extends AutoGenerated.OciOkeNodePool {}

export interface OciInitialNodeLabels extends AutoGenerated.OciInitialNodeLabels {}

export interface OciNodeConfigDetails extends AutoGenerated.OciNodeConfigDetails {}

export interface OciPlacementConfigs extends AutoGenerated.OciPlacementConfigs {}

export interface OciNodeShapeConfig extends AutoGenerated.OciNodeShapeConfig {}

export interface OciNodeSourceDetails extends AutoGenerated.OciNodeSourceDetails {}

export namespace OciOkeNodePool {
    export function newResource(type?: string): OciOkeNodePool {
        return {
            ...AutoGenerated.OciOkeNodePool.newResource('oke_node_pool'),
        }
    }
    export function cloneResource(resource: OciOkeNodePool, type?: string): OciOkeNodePool {
        return AutoGenerated.OciOkeNodePool.cloneResource(resource, 'oke_node_pool') as OciOkeNodePool
    }
    
    export function newOciInitialNodeLabels(): OciInitialNodeLabels {
        return {
            ...AutoGenerated.OciOkeNodePool.newOciInitialNodeLabels(),
        }
    }

    export function newOciNodeConfigDetails(): OciNodeConfigDetails {
        return {
            ...AutoGenerated.OciOkeNodePool.newOciNodeConfigDetails(),
        }
    }

    export function newOciPlacementConfigs(): OciPlacementConfigs {
        return {
            ...AutoGenerated.OciOkeNodePool.newOciPlacementConfigs(),
        }
    }

    export function newOciNodeShapeConfig(): OciNodeShapeConfig {
        return {
            ...AutoGenerated.OciOkeNodePool.newOciNodeShapeConfig(),
        }
    }

    export function newOciNodeSourceDetails(): OciNodeSourceDetails {
        return {
            ...AutoGenerated.OciOkeNodePool.newOciNodeSourceDetails(),
        }
    }

}

export class OciOkeNodePoolClient {
    static new(): OciOkeNodePool {
        return OciOkeNodePool.newResource()
    }
    static clone(resource: OciOkeNodePool): OciOkeNodePool {
        return OciOkeNodePool.cloneResource(resource)
    }
}

export default OciOkeNodePoolClient
