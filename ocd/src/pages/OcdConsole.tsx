/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

import React, { useEffect, useState } from 'react'
import OcdDesigner from './OcdDesigner'
import OcdDocument from '../components/OcdDocument'
import OcdConsoleMenuBar from '../components/OcdConsoleMenuBar'
import OcdConsoleConfig from '../components/OcdConsoleConfiguration'
import { ConsolePageProps } from '../types/Console'
import OcdBom from './OcdBom'
import OcdMarkdown from './OcdMarkdown'
import OcdTabular from './OcdTabular'
import OcdTerraform from './OcdTerraform'
import OcdVariables from './OcdVariables'
// import { OcdPropertiesPanel, OcdPropertiesToolbarButton } from '../properties/OcdPropertiesPanel'

const OcdConsole = (): JSX.Element => {
    const [ocdDocument, setOcdDocument] = useState(OcdDocument.new())
    const [ocdConsoleConfig, setOcdConsoleConfig] = useState(OcdConsoleConfig.new())
    useEffect(() => {setOcdDocument(ocdDocument)}, [ocdDocument])
    return (
        <div className='ocd-console'>
            <OcdConsoleHeader ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig: OcdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)}/>
            <OcdConsoleToolbar ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig: OcdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} />
            <OcdConsoleBody ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig: OcdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} />
            <OcdConsoleFooter ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig: OcdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} />
        </div>
    )
}

const OcdConsoleTitleBar = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        ocdDocument.design.metadata.title = e.target.value.trim()
        setOcdDocument(OcdDocument.clone(ocdDocument))
    }
    return (
        <div className='ocd-console-title-bar'>
            <input type='text' value={ocdDocument.design.metadata.title} onChange={onChange}></input>
        </div>
    )
}

const OcdConsoleHeader = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    return (
        <div className='ocd-console-header ocd-console-header-colour'>
            <div className='ocd-image ocd-logo'></div>
            <div className='ocd-title-and-menu'>
                <OcdConsoleTitleBar ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig:any) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)}/>
                <OcdConsoleMenuBar ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig:any) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)}/>
            </div>
        </div>
    )
}

const OcdConsoleToolbar = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    const onValidateClick = () => {
        console.info('Validate Clicked')
        console.info(ocdConsoleConfig)
        console.info(setOcdConsoleConfig)
        console.info(ocdDocument.design)
        console.info(setOcdDocument)
    }
    const onEstimateClick = () => {
        console.info('Estimate Clicked')
    }
    const onLeftPaletteClick = () => {
        console.info('Left Palette Click')
    }
    return (
        <div className='ocd-console-toolbar ocd-console-toolbar-colour'>
            <div className='ocd-toolbar-left'>
                <div>
                    <div className='left-palette ocd-console-toolbar-icon' onClick={onLeftPaletteClick}></div>
                </div>
            </div>
            <div className='ocd-toolbar-right'>
                <div>
                    <div className='validate ocd-console-toolbar-icon' onClick={onValidateClick}></div>
                    {/* <OcdPropertiesToolbarButton ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} /> */}
                    <div className='cost-estimate ocd-console-toolbar-icon' onClick={onEstimateClick}></div>
                </div>
            </div>
        </div>
    )
}

const OcdConsoleBody = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    const DisplayPage = ocdConsoleConfig.config.displayPage === 'bom' ? OcdBom : 
                        ocdConsoleConfig.config.displayPage === 'designer' ? OcdDesigner : 
                        ocdConsoleConfig.config.displayPage === 'markdown' ? OcdMarkdown : 
                        ocdConsoleConfig.config.displayPage === 'tabular' ? OcdTabular : 
                        ocdConsoleConfig.config.displayPage === 'terraform' ? OcdTerraform : 
                        ocdConsoleConfig.config.displayPage === 'variables' ? OcdVariables : 
                        OcdDesigner
    return (
        <div className='ocd-console-body'>
            {/* <OcdPropertiesPanel ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument) => setOcdDocument(ocdDocument)} ocdResource={resource} /> */}
            {/* <OcdDesigner ocdConsoleConfig={ocdConsoleConfig} setOcdConsoleConfig={(ocdConsoleConfig:any) => setOcdConsoleConfig(ocdConsoleConfig)} ocdDocument={ocdDocument} setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)} /> */}
            <DisplayPage 
                ocdConsoleConfig={ocdConsoleConfig} 
                setOcdConsoleConfig={(ocdConsoleConfig: OcdConsoleConfig) => setOcdConsoleConfig(ocdConsoleConfig)} 
                ocdDocument={ocdDocument} 
                setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)} 
                key={`${ocdConsoleConfig.config.displayPage}-page`}
                />
        </div>
    )
}

const OcdConsoleFooter = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    return (
        <div className='ocd-console-footer ocd-console-footer-colour'></div>
    )
}

export default OcdConsole