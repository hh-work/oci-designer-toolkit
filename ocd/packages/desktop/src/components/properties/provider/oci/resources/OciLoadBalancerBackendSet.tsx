/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdDocument from '../../../../OcdDocument'
import { GeneratedResourceProperties, ResourceAdditionElements, ResourceElementConfig, ResourceProperties } from '../../../OcdPropertyTypes'
import * as AutoGenerated from './generated/OciLoadBalancerBackendSet'
import { OciLoadBalancerBackendSetConfigs } from './configs/OciLoadBalancerBackendSet'
import { OciLoadBalancerBackendSetProxy } from './proxies/OciLoadBalancerBackendSet'
import { OciModelResources as Model } from '@ocd/model'
import { OciLoadBalancerBackend } from './OciLoadBalancerBackend'

export const OciLoadBalancerBackendSet = ({ ocdDocument, setOcdDocument, resource }: ResourceProperties): JSX.Element => {
    const configs: ResourceElementConfig[] = OciLoadBalancerBackendSetConfigs.configs()
    const additionalElements: ResourceAdditionElements[] = [{jsxElement: OciLoadBalancerBackendsObjectList, afterElement: 'health_checker'}]
    return (
        <AutoGenerated.OciLoadBalancerBackendSet ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} configs={configs} additionalElements={additionalElements} />
    )
}

export const OciLoadBalancerBackendsObjectList = ({ ocdDocument, setOcdDocument, resource, configs, rootResource, additionalElements = [] }: GeneratedResourceProperties): JSX.Element => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        e.preventDefault()
        const loadBalancerBackend = Model.OciLoadBalancerBackend.newResource()
        Model.OciLoadBalancerBackend.setParentId(loadBalancerBackend, rootResource.id)
        loadBalancerBackend.loadBalancerId = rootResource.loadBalancerId
        loadBalancerBackend.backendsetName = rootResource.displayName
        ocdDocument.addOciReasourceToList('load_balancer_backend', loadBalancerBackend)
        setOcdDocument(OcdDocument.clone(ocdDocument))
    }
    const onDelete = (child: Model.OciLoadBalancerBackend) => {
        ocdDocument.removeResource(child.id)
        setOcdDocument(OcdDocument.clone(ocdDocument))
    }
    // @ts-ignore 
    return (
        <div className='ocd-property-row'>
            <details open={true}>
                <summary className='summary-background ocd-summary-row'><div>Backends</div><div className='add-property action-button-background action-button-column action-button' onClick={onClick}></div></summary>
                <div className='ocd-resource-properties'>
                    {ocdDocument.getOciResourceList('load_balancer_backend').filter((r: Model.OciLoadBalancerBackend) => r.backendSetId === resource.id).map((r: Model.OciLoadBalancerBackend) => {return <OciLoadBalancerBackendsObject ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={r} configs={configs} rootResource={rootResource} onDelete={onDelete} key={r.id}/>})}
                </div>
            </details>
        </div>
    )
}

export const OciLoadBalancerBackendsObject = ({ ocdDocument, setOcdDocument, resource, configs, rootResource, onDelete, additionalElements = [] }: GeneratedResourceProperties): JSX.Element => {
    return (
        <div className='ocd-property-row'>
            <OciLoadBalancerBackend ocdDocument={ocdDocument} setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} rootResource={rootResource} summaryTitle='Backend' onDelete={onDelete} />
        </div>
    )
}
