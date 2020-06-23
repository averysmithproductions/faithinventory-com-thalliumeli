'use strict'
const ThalliumEliApi = require('../../')
console.log('G')
const InventoryItemsController = {
	index: () => {
	    return (new Promise( (resolve, reject) => {
	    	ThalliumEliApi.GetItems({}, (error, response) => {
	    		resolve(JSON.parse(response.body))
	    	})
	    }))
	    .catch( error => {
	    	console.log('K', error)
	    	return {
	    		'error': error
	    	}
	    })
	}
}
module.exports = InventoryItemsController