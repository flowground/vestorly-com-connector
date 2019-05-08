/**
 * Auto-generated action file for "Vestorly" API.
 *
 * Generated at: 2019-05-07T14:44:37.163Z
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
 * Operation: 'createCustomFeed'
 * Endpoint Path: '/custom_feeds'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "vestorly_auth",
    "access_token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "vestorly_auth": "vestorly_auth",
    "access_token": "access_token",
    "custom_feed_filter_id": "custom_feed_filter_id",
    "custom_feed_permission_id": "custom_feed_permission_id",
    "custom_feed_visibility": "custom_feed_visibility",
    "default": "default",
    "is_auto_curated_newsletter_custom_feed": "is_auto_curated_newsletter_custom_feed",
    "label": "label",
    "popularity": "popularity",
    "premium_content": "premium_content",
    "seed_custom_feed_id": "seed_custom_feed_id",
    "social_posting_id": "social_posting_id",
    "third_party_articles_custom_feed_id": "third_party_articles_custom_feed_id",
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
        operationId: 'createCustomFeed',
        pathName: '/custom_feeds',
        method: 'post',
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