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


export class CreateDoiContact {
    /**
    * Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
    */
    'email': string;
    /**
    * Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For eg. {\'FNAME\':\'Elly\', \'LNAME\':\'Roger\'}
    */
    'attributes'?: object;
    /**
    * Lists under user account where contact should be added
    */
    'includeListIds': Array<number>;
    /**
    * Lists under user account where contact should not be added
    */
    'excludeListIds'?: Array<number>;
    /**
    * Id of the Double opt-in (DOI) template
    */
    'templateId': number;
    /**
    * URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag {{ params.DOIurl }}.
    */
    'redirectionUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "object"
        },
        {
            "name": "includeListIds",
            "baseName": "includeListIds",
            "type": "Array<number>"
        },
        {
            "name": "excludeListIds",
            "baseName": "excludeListIds",
            "type": "Array<number>"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "number"
        },
        {
            "name": "redirectionUrl",
            "baseName": "redirectionUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateDoiContact.attributeTypeMap;
    }
}

