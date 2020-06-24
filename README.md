# faithinventory-thalliumeli

[![faithinventory-com-thalliumeli badge](https://img.shields.io/badge/faithinventory.com-thalliumeli-%23b88e83?style=for-the-badge&logo=javascript)](https://faithinventory.com/)

[<img title="ThalliumEli icon" src="https://user-images.githubusercontent.com/261457/85421172-1dc2dc00-b542-11ea-8c9e-277d92efa9f7.png" width="90" />](https://github.com/averysmithproductions/faithinventory-com-infrastructure#diagram)

# Project Description

ThalliumEli is the API Microservice backend, which receives requests from, processes and then returns responses to BariumNahum.

ThalliumEliStack is declared in the [faithinventory-com-infrastructure](https://github.com/averysmithproductions/faithinventory-com-infrastructure) repo.

This repo contains the code for the ThalliumEliLambda resource, which contains the business logic that touches other ThalliumEliStack resourcs such as *ThalliumEliInventoryItemsTable*, *ThalliumEliInventoryAdminsTable* and *ThalliumEliSESCWEventDestination*.

## Initialize Repo

To initialize this repo, you'll have to install the node modules. Run the following command. You'll only have to do this step once.

```
nvm use
npm install
```

## Deployment

2. To deploy this lambda code, run this command.

`sh ./scripts/deploy.sh <environment> <awsProfile>`

## API Documentation

TO DO...

## Testing

### Unit Tests

Unit Tests can be performed through Jest, and can be edited in the `test/thalliumeli-api-v1/index.unit.js` file.

To invoke the unit test code, follow these steps:

1. First, install Jest into the test folder. You will only need to do this once.

```
cd ./test
npm install
cd ../
```

2. Invoke the Jest unit tests:

`npm run test:units`

### Integration Tests

To invoke the integration tests, run the following command:

`npm run test:integrations -- [--environment=<environment> --email=<email>]`

The `<environment>` argument defaults to `dev`.

> Please note, if the app doesn't have any inventory items, then the specific test:
>
> "When a user visits the homepage" > "should get all inventory items"
>
> will always fail because it is looking for items to return.
>
> The issue will resolve itself on all subsequent runs of this test.

In addition, integration tests can be performed using an API Tool like Paw or Postman.

Just import the stubbed out Paw Swagger file [located in the test folder](test/paw/faithinventory-api-swagger.json) into your tool of choice.

## Authentication

FaithInventory is curated by a collection of authors who are interested in sharing insights and discoveries with the broader community scattered among the nations. At the moment, Site Authors are the only type of user that can authenticate.

This application has pre-selected Administrators, also referred to as Site Authors, and is not designed for them to self-register.

It's designed for a Site Author to be registered, selectively, by the AWS Administrator. In order for an author to receive a magic link request, The AWS Administrator must follow the below instructions, first.

### Update SES

1. Navigate to https://console.aws.amazon.com/ses/home?region=us-east-1#verified-senders-email:
2. Click, 'Verify a New Email Address'
3. In the input field, add the author's email address, then click, 'Verify This Email Address'
4. Have the Author click the link in the automatic email that gets sent to the email address. This now verifies the email address.

### Update DynamoDB

1. Navigate to (https://console.aws.amazon.com/dynamodb/home?region=us-east-1#tables:)[https://console.aws.amazon.com/dynamodb/home?region=us-east-1#tables:]
2. Click '`<environmment>-ThalliumEliInventoryAdminsTable`' > 'Items'
3. Click, 'Create Item', then add the following values, replacing `<email>` with the Site Author's email address.

| name | value |
|-|-|
| partitionKey | 'published' |
| email | `<email>` |

4. Click, 'Save'.
5. Now, make a `GET` request to `<environment>.faithinventory.com/api/1/inventory/admin/magic-link`. The author should now receive a Magic Link that they can click to sign into the PlatinumEnoch author area at `<environment>.faithinventory.com/author`.