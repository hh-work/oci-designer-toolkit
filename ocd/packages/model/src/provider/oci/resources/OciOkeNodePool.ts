/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciOkeNodePool"

export interface OciOkeNodePool extends AutoGenerated.OciOkeNodePool {}

export namespace OciOkeNodePool {
    export namespace InitialNodeLabels {
        export interface InitialNodeLabels extends AutoGenerated.OciOkeNodePool.InitialNodeLabels.InitialNodeLabels {}
        export function newInitialNodeLabels(): InitialNodeLabels {return AutoGenerated.OciOkeNodePool.InitialNodeLabels.newInitialNodeLabels()}
        
    }
    export namespace NodeConfigDetails {
        export interface NodeConfigDetails extends AutoGenerated.OciOkeNodePool.NodeConfigDetails.NodeConfigDetails {}
        export function newNodeConfigDetails(): NodeConfigDetails {return AutoGenerated.OciOkeNodePool.NodeConfigDetails.newNodeConfigDetails()}
        export namespace NodePoolPodNetworkOptionDetails {
            export interface NodePoolPodNetworkOptionDetails extends AutoGenerated.OciOkeNodePool.NodeConfigDetails.NodePoolPodNetworkOptionDetails.NodePoolPodNetworkOptionDetails {}
            export function newNodePoolPodNetworkOptionDetails(): NodePoolPodNetworkOptionDetails {return AutoGenerated.OciOkeNodePool.NodeConfigDetails.NodePoolPodNetworkOptionDetails.newNodePoolPodNetworkOptionDetails()}
            
        }
        export namespace PlacementConfigs {
            export interface PlacementConfigs extends AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.PlacementConfigs {}
            export function newPlacementConfigs(): PlacementConfigs {return AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.newPlacementConfigs()}
            export namespace PreemptibleNodeConfig {
                export interface PreemptibleNodeConfig extends AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.PreemptibleNodeConfig.PreemptibleNodeConfig {}
                export function newPreemptibleNodeConfig(): PreemptibleNodeConfig {return AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.PreemptibleNodeConfig.newPreemptibleNodeConfig()}
                export namespace PreemptionAction {
                    export interface PreemptionAction extends AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.PreemptibleNodeConfig.PreemptionAction.PreemptionAction {}
                    export function newPreemptionAction(): PreemptionAction {return AutoGenerated.OciOkeNodePool.NodeConfigDetails.PlacementConfigs.PreemptibleNodeConfig.PreemptionAction.newPreemptionAction()}
                    
                }
            }
        }
    }
    export namespace NodeEvictionNodePoolSettings {
        export interface NodeEvictionNodePoolSettings extends AutoGenerated.OciOkeNodePool.NodeEvictionNodePoolSettings.NodeEvictionNodePoolSettings {}
        export function newNodeEvictionNodePoolSettings(): NodeEvictionNodePoolSettings {return AutoGenerated.OciOkeNodePool.NodeEvictionNodePoolSettings.newNodeEvictionNodePoolSettings()}
        
    }
    export namespace NodePoolCyclingDetails {
        export interface NodePoolCyclingDetails extends AutoGenerated.OciOkeNodePool.NodePoolCyclingDetails.NodePoolCyclingDetails {}
        export function newNodePoolCyclingDetails(): NodePoolCyclingDetails {return AutoGenerated.OciOkeNodePool.NodePoolCyclingDetails.newNodePoolCyclingDetails()}
        
    }
    export namespace NodeShapeConfig {
        export interface NodeShapeConfig extends AutoGenerated.OciOkeNodePool.NodeShapeConfig.NodeShapeConfig {}
        export function newNodeShapeConfig(): NodeShapeConfig {return AutoGenerated.OciOkeNodePool.NodeShapeConfig.newNodeShapeConfig()}
        
    }
    export namespace NodeSourceDetails {
        export interface NodeSourceDetails extends AutoGenerated.OciOkeNodePool.NodeSourceDetails.NodeSourceDetails {}
        export function newNodeSourceDetails(): NodeSourceDetails {return AutoGenerated.OciOkeNodePool.NodeSourceDetails.newNodeSourceDetails()}
        
    }
    export function newResource(type?: string): OciOkeNodePool {
        const resource = {
            ...AutoGenerated.OciOkeNodePool.newResource('oke_node_pool'),
        }
        return resource
    }
    export function cloneResource(resource: OciOkeNodePool, type?: string): OciOkeNodePool {
        return AutoGenerated.OciOkeNodePool.cloneResource(resource, 'oke_node_pool') as OciOkeNodePool
    }
    export function allowedParentTypes(): string[] {
        return []
    }
    export function getParentId(resource: OciOkeNodePool): string {
        const parentId = resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciOkeNodePool, parentId: string): OciOkeNodePool {
        return resource
    }
    export function getConnectionIds(resource: OciOkeNodePool, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciOkeNodePoolClient extends AutoGenerated.OciOkeNodePoolClient {
    static new(): OciOkeNodePool {
        return OciOkeNodePool.newResource()
    }
    static clone(resource: OciOkeNodePool): OciOkeNodePool {
        return OciOkeNodePool.cloneResource(resource)
    }
}

export default OciOkeNodePoolClient
