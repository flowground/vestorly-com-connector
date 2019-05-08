/**
 * Auto-generated action file for "Vestorly" API.
 *
 * Generated at: 2019-05-07T14:44:37.170Z
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
 * Operation: 'createPost'
 * Endpoint Path: '/posts'
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
    "advisor_id": "advisor_id",
    "approval_status": "approval_status",
    "approval_transactions": "approval_transactions",
    "article_id": "article_id",
    "comment": "comment",
    "created_at": "created_at",
    "display_date": "display_date",
    "display_summary": "display_summary",
    "display_tag": "display_tag",
    "external_url": "external_url",
    "external_url_source": "external_url_source",
    "external_url_type": "external_url_type",
    "group_ids": "group_ids",
    "image_height": "image_height",
    "image_path": "image_path",
    "image_url": "image_url",
    "image_width": "image_width",
    "is_featured": "is_featured",
    "is_mobile_proxy_needed": "is_mobile_proxy_needed",
    "is_proxy_needed": "is_proxy_needed",
    "is_published": "is_published",
    "is_responsive": "is_responsive",
    "logo_url": "logo_url",
    "needs_sanitize": "needs_sanitize",
    "newsletter_ids": "newsletter_ids",
    "post_date": "post_date",
    "proxy_url": "proxy_url",
    "slug": "slug",
    "square_logo_url": "square_logo_url",
    "suitability_score": "suitability_score",
    "summary": "summary",
    "title": "title",
    "topic": "topic",
    "updated_at": "updated_at",
    "vestorly_url": "vestorly_url",
    "video": "video",
    "video_id": "video_id",
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
        operationId: 'createPost',
        pathName: '/posts',
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