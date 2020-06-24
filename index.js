'use strict'
const ThalliumEliApi = require('./thalliumeli-api-v1/')
exports.handler = function(event, context, callback) {

    const { resource, httpMethod } = event
    
    console.log('A1', event)

    if (resource === '/api/1/inventory/items') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'GET':

                ThalliumEliApi.GetItems(event, callback)

                break
        }
        
    } else if (resource === '/{proxy+}') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            default:

                ThalliumEliApi.RequestGraphQL(event, context)

                break
        }
        
    } else if (resource === '/api/1/inventory/admin/magic-link') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'POST':

                ThalliumEliApi.SendAdminMagicLink(event, callback)

                break
        }
        
    } else if (resource === '/api/1/inventory/admin/hash') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'GET':

                ThalliumEliApi.VerifyHash(event, callback)

                break
        }

    } else if (resource === '/api/1/admin/inventory/item') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'POST':

                ThalliumEliApi.CreateItem(event, callback)

                break
        }

    } else if (resource === '/api/1/admin/inventory/items/{id}') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'PUT':

                ThalliumEliApi.UpdateItem(event, callback)

                break

            case 'DELETE':

                ThalliumEliApi.DeleteItem(event, callback)

                break
        }
        
    } else if (resource === '/api/1/admin/inventory/s3/urls') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'GET':

                ThalliumEliApi.GetS3UploadUrl(event, callback)

                break
        }

    } else if (resource === '/api/1/admin/inventory/s3/images') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'DELETE':

                ThalliumEliApi.DeleteImages(event, callback)

                break
        }

    } else if (resource === '/api/1/admin/cloudfront-cache') {

        switch (httpMethod) {

            case 'OPTIONS':

                ThalliumEliApi.GetFlightPermit(callback)

                break

            case 'DELETE':

                ThalliumEliApi.DeleteCloudFrontCache(event, callback)

                break
        }

    }
}