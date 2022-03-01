/*
** Copyright (c) 2020, 2021, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.info('Loaded BlockStorageVolume Properties Javascript');

/*
** Define BlockStorageVolume Properties Class
*/
class BlockStorageVolumeProperties extends OkitResourceProperties {
    constructor (resource) {
        const resource_tabs = []
        super(resource, resource_tabs)
    }

    // Build Additional Resource Specific Properties
    buildResource() {
        const self = this
        // Description
        const [row, input] = this.createInput('text', 'Description', `${self.id}_description`, '', (d, i, n) => self.resource.description = n[i].value)
        this.description = input
        this.append(this.core_tbody, row)
    }

    // Load Additional Resource Specific Properties
    loadResource() {
        this.description.property('value', this.resource.description)
    }
}
