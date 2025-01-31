/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class UpdateChildAccountStatus {
    /**
    * Status of Transactional Email Platform activation for your account (true=enabled, false=disabled)
    */
    'transactionalEmail'?: boolean;
    /**
    * Status of Transactional SMS Platform activation for your account (true=enabled, false=disabled)
    */
    'transactionalSms'?: boolean;
    /**
    * Status of Marketing Automation Platform activation for your account (true=enabled, false=disabled)
    */
    'marketingAutomation'?: boolean;
    /**
    * Status of SMS Campaign Platform activation for your account (true=enabled, false=disabled)
    */
    'smsCampaign'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionalEmail",
            "baseName": "transactionalEmail",
            "type": "boolean"
        },
        {
            "name": "transactionalSms",
            "baseName": "transactionalSms",
            "type": "boolean"
        },
        {
            "name": "marketingAutomation",
            "baseName": "marketingAutomation",
            "type": "boolean"
        },
        {
            "name": "smsCampaign",
            "baseName": "smsCampaign",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UpdateChildAccountStatus.attributeTypeMap;
    }
}

