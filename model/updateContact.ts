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


export class UpdateContact {
    /**
    * Pass the set of attributes to be updated. These attributes must be present in your account. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, `{ \"EMAIL\":\"newemail@domain.com\", \"FNAME\":\"Ellie\", \"LNAME\":\"Roger\"}`. Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in \"SMS\" field should be passed with proper country code. For example {\"SMS\":\"+91xxxxxxxxxx\"} or {\"SMS\":\"0091xxxxxxxxxx\"}
    */
    'attributes'?: object;
    /**
    * Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted = true)
    */
    'emailBlacklisted'?: boolean;
    /**
    * Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted = true)
    */
    'smsBlacklisted'?: boolean;
    /**
    * Ids of the lists to add the contact to
    */
    'listIds'?: Array<number>;
    /**
    * Ids of the lists to remove the contact from
    */
    'unlinkListIds'?: Array<number>;
    /**
    * transactional email forbidden sender for contact. Use only for email Contact
    */
    'smtpBlacklistSender'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "object"
        },
        {
            "name": "emailBlacklisted",
            "baseName": "emailBlacklisted",
            "type": "boolean"
        },
        {
            "name": "smsBlacklisted",
            "baseName": "smsBlacklisted",
            "type": "boolean"
        },
        {
            "name": "listIds",
            "baseName": "listIds",
            "type": "Array<number>"
        },
        {
            "name": "unlinkListIds",
            "baseName": "unlinkListIds",
            "type": "Array<number>"
        },
        {
            "name": "smtpBlacklistSender",
            "baseName": "smtpBlacklistSender",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UpdateContact.attributeTypeMap;
    }
}

