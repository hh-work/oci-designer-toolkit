/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
// TODO: Remove Following
// @ts-nocheck

import { OcdCodeGenerator } from './OcdCodeGenerator.js'
import { OcdUtils } from '@ocd/core'

export class OcdMarkdownGenerator extends OcdCodeGenerator {
    simpleTypes = ['string', 'bool', 'number']
    constructor () {
        super()
        this.ignoreAttributes = [...this.commonElements, ...this.commonIgnoreElements]
    }

    /*
    ** Content for the top level file. This will only be created if it does not exists.
    */
    content = (resource: string, schema) => {
        const schemaObjects = this.getSchemaObjects(schema)
        const contents = `${this.copyright()}
    
    import * as AutoGenerated from "./${this.generatedDirectory()}/${this.interfaceName(resource)}"
    
    export class ${this.resourceName(resource)} extends AutoGenerated.${this.autoGeneratedResourceName(resource)} {}
    
    export default ${this.resourceName(resource)}
    `
        return contents
       }
    
    /*
    ** Content for the auto generated file this will be written on each execution.
    */
    autoGeneratedContent = (resource: string, schema) => {
        const schemaObjects = this.getSchemaObjects(schema)
        const schemaAttributes = this.getSchemaAttributes(schema)
        const cacheLookupAttributes = schemaAttributes.filter((a) => a.cacheLookup)
        const contents = `${this.copyright()}
${this.autoGeneratedWarning()}
/* eslint-disable @typescript-eslint/no-unused-vars */

import { OciMarkdownResource } from '../../OciMarkdownResource'
import { OciModelResources as Model } from '@ocd/model'

export class ${this.autoGeneratedResourceName(resource)} extends OciMarkdownResource {
    resource: Model.${this.interfaceName(resource)}
    constructor(resource: Model.${this.interfaceName(resource)}) {
        super()
        this.resource = resource
    }

    /*
    ** Generate Markdown Resource / Data Statement(s)
    */
    generate(resource: Model.${this.interfaceName(resource)} | undefined) {
        resource = resource ? resource : this.resource
        const content = \`
\${this.ociCommonGeneration(resource)}

| Attribute | Value |
| --------- | ----- |
${Object.entries(schema.attributes).filter(([k, v]) => !this.ignoreAttributes.includes(k) && this.simpleTypes.includes(v.type)).map(([k, a]) => this.attributeTomarkdownAssignment(resource, k, a)).join('\n')}

${Object.entries(schema.attributes).filter(([k, v]) => !this.ignoreAttributes.includes(k) && !this.simpleTypes.includes(v.type)).map(([k, a]) => this.attributeTomarkdownAssignment(resource, k, a)).join('\n')}
    \`
        return content
    }
    // Complex Elements
    ${schemaObjects.map(i => this.markdownComplextElement(resource, i)).filter(i => i.trim() !== '').join('\n    ')}
    // Simple Elements
    ${schemaAttributes.filter(a => !this.ignoreAttributes.includes(a.name)).map(i => this.markdownSimpleElement(resource, i)).filter(i => i.trim() !== '').join('\n    ')}
}

export default ${this.autoGeneratedResourceName(resource)}
`
        return contents
    }

    attributeTomarkdownAssignment = (resource, name, attribute, level=0) => {
        if (attribute.type === 'string' && attribute.lookup)                  return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'string')                                 return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'bool')                                   return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'number')                                 return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'list' && attribute.subtype === 'string') return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'object')                                 return `\${this.${this.markdownObjectName(attribute.name)}(resource.${this.modelElementName(attribute.name)}${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'object')                                 return `\${this.${this.markdownObjectName(attribute.name)}(resource.${this.modelElementName(attribute.name)}${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'list' && attribute.subtype === 'object') return `\${this.${this.markdownObjectListName(attribute.name)}(resource.${this.modelElementName(attribute.name)}${level === 0 ? '' : ', level+1'})}`
        else if (attribute.type === 'list' && attribute.lookup) return `\${this.${this.markdownSimpleName(attribute.name)}(resource${level === 0 ? '' : ', level+1'})}`
        else return `# ${this.toCamelCase(name)} Type ${attribute.type} SubType ${attribute.subtype} Required ${attribute.required}`
    }

    markdownSimpleElementType = (resource, name, attribute, level=0, resourceName='common') => {
        // const mentadataAttributes = {...markdownMetadataOverrides.common, ...Object.hasOwn(markdownMetadataOverrides, resourceName) ? markdownMetadataOverrides[resourceName] : {}}
        // if (Object.hasOwn(mentadataAttributes, name))                         return `this.generateMetadataAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, '${mentadataAttributes[name]}', level)`
        // else if (attribute.type === 'string' && attribute.cacheLookup)        return `this.isPropertyAssignConditionTrue(${attribute.conditional}, ${JSON.stringify(attribute.condition)}, resource) ? this.generateCacheAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level, '${attribute.lookupResource}') : ''`
        // else if (attribute.type === 'string' && attribute.staticLookup)       return `this.isPropertyAssignConditionTrue(${attribute.conditional}, ${JSON.stringify(attribute.condition)}, resource) ? this.generateTextAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level) : ''`
        // else if (attribute.type === 'string' && attribute.lookup)             return `this.generateReferenceAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level${attribute.lookupResourceElement && attribute.lookupResourceElement !== '' ? `, '${attribute.lookupResourceElement}'` : ''})`
        if (attribute.type === 'string')                                      return `this.generateTextAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level)`
        else if (attribute.type === 'bool')                                   return `this.generateBooleanAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level)`
        else if (attribute.type === 'number')                                 return `this.generateNumberAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level)`
        // else if (attribute.type === 'list' && attribute.lookup)               return `this.generateReferenceListAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level)`
        // else if (attribute.type === 'list' && attribute.subtype === 'string') return `this.isPropertyAssignConditionTrue(${attribute.conditional}, ${JSON.stringify(attribute.condition)}, resource) ? this.generateStringListAttribute("${name}", resource.${this.toCamelCase(name)}, ${attribute.required}, level) : ''`
        else return `'# ${this.toCamelCase(name)} Type ${attribute.type} Required ${attribute.required}'`
    }

    markdownSimpleElement = (resource, attribute, level=0) => {
        const simpleTypes = ['string', 'bool', 'number']
        const groupTypes = ['list', 'set']
        if (simpleTypes.includes(attribute.type) || (groupTypes.includes(attribute.type) && simpleTypes.includes(attribute.subtype))) {
            return `// ${OcdUtils.toResourceTypeName(attribute.name)} (${this.markdownSimpleName(attribute.name)})
    ${this.markdownSimpleName(attribute.name)} = (resource: Record<string, any>, level=0): string => {return ${this.markdownSimpleElementType(resource, attribute.name, attribute)}}
    `
        } else return ''
    }

    markdownComplextElement = (resource, attribute) => {
        if (attribute.type === 'object') return this.markdownObjectElement(resource, attribute)
        else if (attribute.type === 'list' && attribute.subtype === 'object') return this.markdownObjectListElement(resource, attribute)
        else return ``
    }

    markdownObjectElement = (resource, attribute, level=0) => {
        // return `${this.markdownObjectName(attribute.name)} = (resource: Record<string, any>): string => {
        return `// ${OcdUtils.toResourceTypeName(attribute.name)} (${this.markdownObjectName(attribute.name)})
    ${this.markdownObjectName(attribute.name)} = (resource: Model.${this.interfaceName(resource)}.${this.interfaceName(attribute.name)} | undefined, level=0): string => {
            return resource ? \`
    
\${this.heading[level]} ${OcdUtils.toTitle(attribute.name)}
    
| Attribute | Value |
| --------- | ----- |
${Object.entries(attribute.attributes).filter(([k, v]) => !this.ignoreAttributes.includes(k)).map(([k, a]) => this.attributeTomarkdownAssignment(resource, k, a, level+1)).join('\n')}\` : '# ${attribute.name} is not defined. Type: ${attribute.type} SubType: ${attribute.subtype} Required: ${attribute.required}'
    }
    `
    }

    markdownObjectListElement = (resource, attribute, level=0) => {
        return `${this.markdownObjectElement(resource, attribute)}
    // ${OcdUtils.toResourceTypeName(attribute.name)} (${this.markdownObjectListName(attribute.name)})
    ${this.markdownObjectListName(attribute.name)} = (objectList: Model.${this.interfaceName(resource)}.${this.interfaceName(attribute.name)}[] | undefined, level=0): string => {
        return objectList && objectList.length > 0 ? \`\${objectList.map((o: Model.${this.interfaceName(resource)}.${this.interfaceName(attribute.name)}) => this.${this.markdownObjectName(attribute.name)}(o)).join(\`\\n\`)}\` : '# ${attribute.name} is not defined. Type: ${attribute.type} SubType: ${attribute.subtype} Required: ${attribute.required}'
    }
    `
    }

    markdownSimpleName = (name) => `${this.toCamelCase(name.replaceAll('.', '_'))}`
    markdownObjectName = (name) => `${this.toCamelCase(name)}Object`
    markdownObjectListName = (name) => `${this.toCamelCase(name)}ObjectList`
            
    outputFilename = (resource: string) => `${this.markdownFilename(resource)}.ts`
}

export default OcdMarkdownGenerator
module.exports = { OcdMarkdownGenerator }
