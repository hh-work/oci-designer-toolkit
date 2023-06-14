/*
** Copyright (c) 2020, 2022, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.debug('Loaded Instance Configuration Javascript');

/*
** Define Instance Configuration Class
*/
class InstanceConfiguration extends OkitArtifact {
    /*
    ** Create
    */
    constructor (data={}, okitjson={}) {
        super(okitjson);
        // Configure default values
        this.compartment_id = data.parent_id;
        // Update with any passed data
        this.merge(data);
        this.convert();
    }
    /*
    ** Name Generation
    */
    getNamePrefix() {
        return super.getNamePrefix() + 'ic';
    }
    /*
    ** Static Functionality
    */
    static getArtifactReference() {
        return 'Instance Configuration';
    }
}
/*
** Dynamically Add Model Functions
*/
OkitJson.prototype.newInstanceConfiguration = function(data) {
    this.getInstanceConfigurations().push(new InstanceConfiguration(data, this));
    return this.getInstanceConfigurations()[this.getInstanceConfigurations().length - 1];
}
OkitJson.prototype.getInstanceConfigurations = function() {
    if (!this.instance_configurations) this.instance_configurations = []
    return this.instance_configurations;
}
OkitJson.prototype.getInstanceConfiguration = function(id='') {
    return this.getInstanceConfigurations().find(r => r.id === id)
}
OkitJson.prototype.deleteInstanceConfiguration = function(id) {
    this.instance_configurations = this.instance_configurations ? this.instance_configurations.filter((r) => r.id !== id) : []
}
