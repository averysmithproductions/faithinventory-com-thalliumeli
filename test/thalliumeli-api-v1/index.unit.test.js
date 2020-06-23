const ThalliumEliLambda = require('../../index')
const ThalliumEliApi = require('../../thalliumeli-api-v1/index')
const mockedEvent = {
	'resource': '',
	'httpMethod': ''
}
describe('ThalliumEliApi', () => {
	describe('GetFlightPermit', () => {
		it('should be called once by http method "OPTIONS", resource "/api/1/inventory/items"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/items',
				'httpMethod': 'OPTIONS'
			})
			jest.spyOn(ThalliumEliApi, 'GetFlightPermit').mockImplementationOnce(() => {})
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.GetFlightPermit).toHaveBeenCalledTimes(1)
			ThalliumEliApi.GetFlightPermit.mockRestore()
		})
		it('should contain Access-Control-Allow-* headers', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/items',
				'httpMethod': 'OPTIONS'
			})

			const expected = {}
			expected['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
			expected['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with'
			expected['Access-Control-Allow-Credentials'] = 'true'

			const callback = (err, result) => {
				expect(result.headers.hasOwnProperty('Access-Control-Allow-Methods')).toBe(true)
				expect(result.headers['Access-Control-Allow-Methods']).toEqual(expected['Access-Control-Allow-Methods'])
				expect(result.headers.hasOwnProperty('Access-Control-Allow-Headers')).toBe(true)
				expect(result.headers['Access-Control-Allow-Headers']).toEqual(expected['Access-Control-Allow-Headers'])
				//expect(result.headers.hasOwnProperty('Access-Control-Allow-Origin')).toBe(true)
				expect(result.headers.hasOwnProperty('Access-Control-Allow-Credentials')).toBe(true)
				expect(result.headers['Access-Control-Allow-Credentials']).toEqual(expected['Access-Control-Allow-Credentials'])
			}

			ThalliumEliApi.GetFlightPermit(callback)
		})
	})
	describe('GetItems', () => {
		it('should be called once by http method "GET", resource "/api/1/inventory/items"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/items',
				'httpMethod': 'GET'
			})
			jest.spyOn(ThalliumEliApi, 'GetItems').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.GetItems).toHaveBeenCalledTimes(1)
			ThalliumEliApi.GetItems.mockRestore()
		})
	})
	describe('CreateItem', () => {
		it('should be called once by http method "POST", resource "/api/1/inventory/item"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/item',
				'httpMethod': 'POST'
			})
			jest.spyOn(ThalliumEliApi, 'CreateItem').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.CreateItem).toHaveBeenCalledTimes(1)
			ThalliumEliApi.CreateItem.mockRestore()
		})
	})
	describe('UpdateItem', () => {
		it('should be called once by http method "PUT", resource "/api/1/inventory/items/{id}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/items/{id}',
				'httpMethod': 'PUT'
			})
			jest.spyOn(ThalliumEliApi, 'UpdateItem').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.UpdateItem).toHaveBeenCalledTimes(1)
			ThalliumEliApi.UpdateItem.mockRestore()
		})
	})
	describe('DeleteItem', () => {
		it('should be called once by http method "PUT", resource "/api/1/inventory/items/{id}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/items/{id}',
				'httpMethod': 'DELETE'
			})
			jest.spyOn(ThalliumEliApi, 'DeleteItem').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.DeleteItem).toHaveBeenCalledTimes(1)
			ThalliumEliApi.DeleteItem.mockRestore()
		})
	})
	describe('RequestGraphQL', () => {
		it('should be called once by http method "OPTIONS", resource "/{proxy+}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/{proxy+}',
				'httpMethod': 'OPTIONS'
			})
			jest.spyOn(ThalliumEliApi, 'GetFlightPermit').mockImplementationOnce(() => {})
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.GetFlightPermit).toHaveBeenCalledTimes(1)
			ThalliumEliApi.GetFlightPermit.mockRestore()
		})
		it('should be called once by http method "GET", resource "/{proxy+}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/{proxy+}',
				'httpMethod': 'GET'
			})
			jest.spyOn(ThalliumEliApi, 'RequestGraphQL').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.RequestGraphQL).toHaveBeenCalledTimes(1)
			ThalliumEliApi.RequestGraphQL.mockRestore()
		})
		it('should be called once by http method "POST", resource "/{proxy+}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/{proxy+}',
				'httpMethod': 'POST'
			})
			jest.spyOn(ThalliumEliApi, 'RequestGraphQL').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.RequestGraphQL).toHaveBeenCalledTimes(1)
			ThalliumEliApi.RequestGraphQL.mockRestore()
		})
		it('should be called once by http method "PUT", resource "/{proxy+}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/{proxy+}',
				'httpMethod': 'PUT'
			})
			jest.spyOn(ThalliumEliApi, 'RequestGraphQL').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.RequestGraphQL).toHaveBeenCalledTimes(1)
			ThalliumEliApi.RequestGraphQL.mockRestore()
		})
		it('should be called once by http method "DELETE", resource "/{proxy+}"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/{proxy+}',
				'httpMethod': 'PUT'
			})
			jest.spyOn(ThalliumEliApi, 'RequestGraphQL').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.RequestGraphQL).toHaveBeenCalledTimes(1)
			ThalliumEliApi.RequestGraphQL.mockRestore()
		})
		it('should be called once by http method "PUT", resource "/inventory/admin/magic-link"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/admin/magic-link',
				'httpMethod': 'POST'
			})
			jest.spyOn(ThalliumEliApi, 'SendAdminMagicLink').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.SendAdminMagicLink).toHaveBeenCalledTimes(1)
			ThalliumEliApi.SendAdminMagicLink.mockRestore()
		})
		it('should be called once by http method "GET", resource "/inventory/admin/hash"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/admin/hash',
				'httpMethod': 'GET'
			})
			jest.spyOn(ThalliumEliApi, 'VerifyHash').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.VerifyHash).toHaveBeenCalledTimes(1)
			ThalliumEliApi.VerifyHash.mockRestore()
		})
		it('should be called once by http method "GET", resource "/inventory/admin/s3/urls"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/admin/s3/urls',
				'httpMethod': 'GET'
			})
			jest.spyOn(ThalliumEliApi, 'GetS3UploadUrl').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.GetS3UploadUrl).toHaveBeenCalledTimes(1)
			ThalliumEliApi.GetS3UploadUrl.mockRestore()
		})
		it('should be called once by http method "DELETE", resource "/inventory/admin/s3/images"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/admin/s3/images',
				'httpMethod': 'DELETE'
			})
			jest.spyOn(ThalliumEliApi, 'DeleteImages').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.DeleteImages).toHaveBeenCalledTimes(1)
			ThalliumEliApi.DeleteImages.mockRestore()
		})
		it('should be called once by http method "DELETE", resource "/inventory/admin/cloudfront-cache"', () => {
			const event = Object.assign({}, mockedEvent, {
				'resource': '/api/1/inventory/admin/cloudfront-cache',
				'httpMethod': 'DELETE'
			})
			jest.spyOn(ThalliumEliApi, 'DeleteCloudFrontCache').mockImplementationOnce( () => {} )
			ThalliumEliLambda.handler(event, {}, () => {})
			expect(ThalliumEliApi.DeleteCloudFrontCache).toHaveBeenCalledTimes(1)
			ThalliumEliApi.DeleteCloudFrontCache.mockRestore()
		})
	})
})