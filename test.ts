import * as SibApiV3Sdk from './api'
 
const apiInstance = new SibApiV3Sdk.AccountApi()

apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, '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');

apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});