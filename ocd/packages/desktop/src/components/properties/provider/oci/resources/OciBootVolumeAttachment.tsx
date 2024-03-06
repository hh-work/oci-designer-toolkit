/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdDocument from '../../../../OcdDocument'
import { ResourceElementConfig, ResourceProperties } from '../../../OcdPropertyTypes'
import * as AutoGenerated from './generated/OciBootVolumeAttachment'
import { OciBootVolumeAttachmentConfigs } from './configs/OciBootVolumeAttachment'

export const OciBootVolumeAttachment = ({ ocdDocument, setOcdDocument, resource }: ResourceProperties): JSX.Element => {
    const configs: ResourceElementConfig[] = OciBootVolumeAttachmentConfigs.configs()
    return (
        <AutoGenerated.OciBootVolumeAttachment ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} configs={configs} />
    )
}
