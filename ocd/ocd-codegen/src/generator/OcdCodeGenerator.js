/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import fs from 'fs'
import path from 'path'

export class OcdCodeGenerator {
    commonElements = [
        'compartment_id', // Common Element
        'defined_tags',   // Common Element
        'display_name',   // Common Element
        'freeform_tags',  // Common Element
        'id',             // Common Element
        'name',           // Common Element
    ]
    commonIgnoreElements = [
        'region',
        'inactive_state', 
        'is_accessible',
        'state', 
        'time_created',
        'system_tags'
    ]
    constructor(prefix='Oci') {
        this.prefix = prefix
        this.resources = []
    }

    generate(resource, schema) {
        this.resources.push(resource)
        this.resourceFile = this.resourcesFileContent(this.resources)
        this.resourceAutoGeneratedDefinitionFile = this.autoGeneratedContent(resource, schema)
        this.resourceDefinitionFile = this.content(resource, schema)
    }

    writeFiles(outputDirectory, resource, force = false) {
        const outputFilename = this.outputFilename(resource)
        const resourceDirectory = path.join(outputDirectory, this.resourcesDirectory(resource))
        const resourceFilename = path.join(resourceDirectory, outputFilename)
        // console.info(`Resource Directory : ${resourceDirectory}`)
        const generatedDirectory = path.join(outputDirectory, this.resourcesDirectory(resource), this.generatedDirectory(resource))
        const generatedFilename = path.join(generatedDirectory, outputFilename)
        // console.info(`Generated Directory : ${generatedDirectory}`)
        if (!fs.existsSync(resourceDirectory)) fs.mkdirSync(resourceDirectory, {recursive: true})
        if (!fs.existsSync(generatedDirectory)) fs.mkdirSync(generatedDirectory, {recursive: true})
        console.info(`Writting Generated Filename : ${generatedFilename}`)
        fs.writeFileSync(generatedFilename, this.resourceAutoGeneratedDefinitionFile)
        if (force || !fs.existsSync(resourceFilename)) {
            console.info(`Writting Resource File : ${resourceFilename}`)
            fs.writeFileSync(resourceFilename, this.resourceDefinitionFile)
        } else {
            console.info(`Resource File already exists : ${resourceFilename}`)
        }
    }

    resourcesFileContent(resources) {
        const contents = `${this.copyright()}
${this.autoGeneratedWarning()}

${resources.sort().map((r) => `export { ${this.resourceName(r)} } from './${this.resourcesDirectory()}/${this.resourceName(r)}'`).join('\n')}
    `
            return contents
    }

    today() {
        const today = new Date()
        return `${today.getDate() < 10 ? '0' : ''}${today.getDate()}/${today.getMonth() + 1 < 10 ? '0' : ''}${today.getMonth() + 1}/${today.getFullYear()}`
    }

    now() {
        const today = new Date()
        return `${this.today()} ${today.getHours()}:${today.getMinutes() < 10 ? '0' : ''}${today.getMinutes()}:${today.getSeconds() < 10 ? '0' : ''}${today.getSeconds()}`
    }

    copyright() {
        return `/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/`
    }

    autoGeneratedWarning() {
        return `/*
**
** ======================================================================
** === Auto Generated Code All Edits Will Be Lost During Regeneration ===
** ======================================================================
**
*/`
    }

    configsDirectory = () => 'configs'
    generatedDirectory = () => 'generated'
    resourcesDirectory = () => 'resources'

    // Common
    resourceCommonName = (resource) => {return `${this.prefix}${this.toTitleCase(resource.split('_').join(' ')).split(' ').join('')}`}
    resourceName = (resource) => {return `${this.prefix}${this.toTitleCase(resource.split('_').join(' ')).split(' ').join('')}`}
    resourceFilename = (resource) => `${this.resourceName(resource)}`
    autoGeneratedResourceName = (resource) => {return `${this.prefix}${this.toTitleCase(resource.split('_').join(' ')).split(' ').join('')}`}

    interfaceName = (resource) => this.resourceName(resource)
    namespaceName = (resource) => this.resourceName(resource)
    className = (resource) => `${this.resourceName(resource)}Client`
    autoGeneratedInterfaceName = (resource) => this.autoGeneratedResourceName(resource)
    autoGeneratedNamespaceName = (resource) => this.autoGeneratedResourceName(resource)
    autoGeneratedClassName = (resource) => `${this.autoGeneratedResourceName(resource)}Client`
    namespaceFunctionName = (name) => `new${this.interfaceName(name)}`
    configNamespace = (resource) => `${this.resourceName(resource)}Configs`

    // Model
    modelFilename = (resource) => this.resourceFilename(resource)

    // Properties   
    propertiesFilename = (resource) => this.resourceFilename(resource)

    // Terraform   
    terraformFilename = (resource) => this.resourceFilename(resource)

    // // Model
    // resourceModelName = (resource) => `${this.resourceCommonName(resource)}`
    // resourceModelFilename = (resource) => `${this.resourceModelName(resource)}`
    // modelInterfaceName = (resource) => this.resourceModelName(resource)
    // modelNamespaceName = (resource) => this.resourceModelName(resource)
    // modelNamespaceFunctionName = (name) => `new${this.modelInterfaceName(name)}`

    // // Properties
    // resourcePropertiesName = (resource) => `${this.resourceCommonName(resource)}`
    // resourcePropertiesFilename = (resource) => `${this.resourcePropertiesName(resource)}`

    // // Terraform
    // resourceTerraformName = (resource) => `${this.resourceCommonName(resource)}`

    toTitleCase = (str) => str.replace(/\b\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();}).replaceAll('-', '_').replace(/\W+/g, ' ')
    toCamelCase = (str) => `${this.toTitleCase(str.split('_').join(' ')).split(' ').map((e, i) => i === 0 ? e.toLowerCase() : e).join('')}`

    getSchemaObjects = (schema) => Object.values(schema.attributes).filter(f => f.attributes).reduce((a, c) => [...a, c, ...this.getSchemaObjects(c)], []).reduce((a, c) => [...a, ...a.find((o) => o.name === c.name) ? [] : [c]], [])
    getSchemaAttributes = (schema) => Object.values(schema.attributes).reduce((a, c) => [...a, c, ...c.attributes ? this.getSchemaAttributes(c) : []], []).reduce((a, c) => [...a, ...a.find((o) => o.name === c.name) ? [] : [c]], [])
    // getSchemaAttributes = (schema) => Object.values(schema.attributes).filter(f => !f.attributes).reduce((a, c) => [...a, c], []).reduce((a, c) => [...a, ...a.find((o) => o.name === c.name) ? [] : [c]], [])
    // getSchemaObjects = (schema) => Object.values(schema.attributes).filter(f => f.type === 'object').reduce((a, c) => [...a, c, ...this.getSchemaObjects(c)], [])
    // .filter(f => f.type === 'object').reduce((a, c) => [...a, c, ...this.getSchemaObjects(c)], [])
    // ...c.attributes.filter(f => f.type === 'object')
}

export default OcdCodeGenerator