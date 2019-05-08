/**
 * Auto-generated action file for "Vestorly" API.
 *
 * Generated at: 2019-05-07T14:44:37.166Z
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
 * Operation: 'createMember'
 * Endpoint Path: '/members'
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
    "_id": "_id",
    "address": "address",
    "age": "age",
    "assets": "assets",
    "city": "city",
    "data_estimated": "data_estimated",
    "education": "education",
    "email": "email",
    "estimated_location": "estimated_location",
    "estimated_zip": "estimated_zip",
    "family": "family",
    "first_name": "first_name",
    "gender": "gender",
    "genuine_email": "genuine_email",
    "high_net_worth": "high_net_worth",
    "home_market_value": "home_market_value",
    "home_owner_status": "home_owner_status",
    "hometown": "hometown",
    "household_income": "household_income",
    "interest_consultation": "interest_consultation",
    "interest_in_new_advisor": "interest_in_new_advisor",
    "invited_by": "invited_by",
    "invited_on": "invited_on",
    "is_client": "is_client",
    "is_hidden": "is_hidden",
    "last_active_date": "last_active_date",
    "last_name": "last_name",
    "location": "location",
    "marital_status": "marital_status",
    "message": "message",
    "occupation": "occupation",
    "phone": "phone",
    "picture_url": "picture_url",
    "portfolio_size": "portfolio_size",
    "profile_url": "profile_url",
    "register_ip_addr": "register_ip_addr",
    "signed_up_with": "signed_up_with",
    "state": "state",
    "subscribed_group_ids": "subscribed_group_ids",
    "tags": "tags",
    "unsubscribed": "unsubscribed",
    "unsubscribed_date": "unsubscribed_date",
    "user_type": "user_type",
    "zip": "zip",
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
        operationId: 'createMember',
        pathName: '/members',
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