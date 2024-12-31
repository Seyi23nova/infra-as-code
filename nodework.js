const { DefaultAzureCredential } = require("@azure/identity");
const { ResourceManagementClient } = require("@azure/arm-resources");

async function createResourceGroup() {
    // Replace these values with your specific details
    const subscriptionId = "49c5cd63-c46c-4072-b1c6-db82050db0"; // Replace with your Azure subscription ID
    const resourceGroupName = "myprogramxxxgrp";
    const location = "eastus"; // Replace with your desired Azure region

    // Create a credential object
    const credential = new DefaultAzureCredential();

    // Create a ResourceManagementClient instance
    const resourceClient = new ResourceManagementClient(credential, subscriptionId);

    // Create the resource group
    console.log(`Creating resource group: ${resourceGroupName} in ${location}`);
    const result = await resourceClient.resourceGroups.createOrUpdate(resourceGroupName, {
        location: location,
    });

    console.log("Resource group created:", result);
}

createResourceGroup().catch((err) => {
    console.error("Error creating resource group:", err);
});
