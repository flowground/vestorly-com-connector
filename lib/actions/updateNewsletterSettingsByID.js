/**
 * Auto-generated action file for "Vestorly" API.
 *
 * Generated at: 2019-05-07T14:44:37.168Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / vestorly-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'updateNewsletterSettingsByID'
 * Endpoint Path: '/newsletter_settings/{id}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id",
    "vestorly_auth",
    "access_token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "vestorly_auth": "vestorly_auth",
    "access_token": "access_token",
    "_id": "_id",
    "banner_color": "banner_color",
    "body_html": "body_html",
    "email_accent_color": "email_accent_color",
    "email_day_of_week": "email_day_of_week",
    "email_hour": "email_hour",
    "email_status": "email_status",
    "facebook_active_wall": "facebook_active_wall",
    "footer_email_font": "footer_email_font",
    "footer_html": "footer_html",
    "footer_image_url": "footer_image_url",
    "group_id": "group_id",
    "header_background_color": "header_background_color",
    "header_image_url": "header_image_url",
    "intro_text": "intro_text",
    "linkedin_active_wall": "linkedin_active_wall",
    "montage_enabled": "montage_enabled",
    "montage_facebook_image_url": "montage_facebook_image_url",
    "montage_linkedin_image_url": "montage_linkedin_image_url",
    "montage_title": "montage_title",
    "montage_twitter_image_url": "montage_twitter_image_url",
    "newsletter_ids": "newsletter_ids",
    "newsletter_type": "newsletter_type",
    "primary_email_font": "primary_email_font",
    "salutation_text": "salutation_text",
    "social_day_of_week": "social_day_of_week",
    "social_description": "social_description",
    "social_posting_text": "social_posting_text",
    "social_title": "social_title",
    "subject": "subject",
    "title_color": "title_color",
    "newsletter_setting": "newsletter_setting",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['access_token'] = {token: cfg['access_token']};

    let callParams = {
        spec: spec,
        operationId: 'updateNewsletterSettingsByID',
        pathName: '/newsletter_settings/{id}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}