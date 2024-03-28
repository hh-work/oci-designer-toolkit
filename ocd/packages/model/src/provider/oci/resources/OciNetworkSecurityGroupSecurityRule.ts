/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciNetworkSecurityGroupSecurityRule"

export interface OciNetworkSecurityGroupSecurityRule extends AutoGenerated.OciNetworkSecurityGroupSecurityRule {}

export namespace OciNetworkSecurityGroupSecurityRule {
    export namespace IcmpOptions {
        export interface IcmpOptions extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.IcmpOptions.IcmpOptions {}
        export function newIcmpOptions(): IcmpOptions {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.IcmpOptions.newIcmpOptions()}
        
    }
    export namespace TcpOptions {
        export interface TcpOptions extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.TcpOptions {}
        export function newTcpOptions(): TcpOptions {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.newTcpOptions()}
        export namespace DestinationPortRange {
            export interface DestinationPortRange extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.DestinationPortRange.DestinationPortRange {}
            export function newDestinationPortRange(): DestinationPortRange {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.DestinationPortRange.newDestinationPortRange()}
            
        }
        export namespace SourcePortRange {
            export interface SourcePortRange extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.SourcePortRange.SourcePortRange {}
            export function newSourcePortRange(): SourcePortRange {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.TcpOptions.SourcePortRange.newSourcePortRange()}
            
        }
    }
    export namespace UdpOptions {
        export interface UdpOptions extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.UdpOptions {}
        export function newUdpOptions(): UdpOptions {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.newUdpOptions()}
        export namespace DestinationPortRange {
            export interface DestinationPortRange extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.DestinationPortRange.DestinationPortRange {}
            export function newDestinationPortRange(): DestinationPortRange {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.DestinationPortRange.newDestinationPortRange()}
            
        }
        export namespace SourcePortRange {
            export interface SourcePortRange extends AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.SourcePortRange.SourcePortRange {}
            export function newSourcePortRange(): SourcePortRange {return AutoGenerated.OciNetworkSecurityGroupSecurityRule.UdpOptions.SourcePortRange.newSourcePortRange()}
            
        }
    }
    export function newResource(type?: string): OciNetworkSecurityGroupSecurityRule {
        const resource = {
            ...AutoGenerated.OciNetworkSecurityGroupSecurityRule.newResource('network_security_group_security_rule'),
        }
        return resource
    }
    export function cloneResource(resource: OciNetworkSecurityGroupSecurityRule, type?: string): OciNetworkSecurityGroupSecurityRule {
        return AutoGenerated.OciNetworkSecurityGroupSecurityRule.cloneResource(resource, 'network_security_group_security_rule') as OciNetworkSecurityGroupSecurityRule
    }
    export function allowedParentTypes(): string[] {
        return ['NetworkSecurityGroup']
    }
    export function getParentId(resource: OciNetworkSecurityGroupSecurityRule): string {
        const parentId = resource.networkSecurityGroupId !== '' ? resource.networkSecurityGroupId : resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciNetworkSecurityGroupSecurityRule, parentId: string): OciNetworkSecurityGroupSecurityRule {
        resource.networkSecurityGroupId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciNetworkSecurityGroupSecurityRule, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciNetworkSecurityGroupSecurityRuleClient extends AutoGenerated.OciNetworkSecurityGroupSecurityRuleClient {
    static new(): OciNetworkSecurityGroupSecurityRule {
        return OciNetworkSecurityGroupSecurityRule.newResource()
    }
    static clone(resource: OciNetworkSecurityGroupSecurityRule): OciNetworkSecurityGroupSecurityRule {
        return OciNetworkSecurityGroupSecurityRule.cloneResource(resource)
    }
}

export default OciNetworkSecurityGroupSecurityRuleClient
