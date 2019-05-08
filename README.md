# ![LOGO](logo.png) Vestorly **flow**ground Connector

## Description

A generated **flow**ground connector for the Vestorly API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/vestorly.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:44:37+03:00

## API Description

Vestorly Developers API

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Returns a single advisor given their ID

*Tags:* `advisors`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Advisor Id to fetch

### Returns phrases used in Categories

*Tags:* `article_phrase`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `text_search` - _optional_ - Text to search phrases
* `size` - _optional_ - Number of returned phrases
* `from` - _optional_ - Number of phrases to skip

### Returns all articles

*Tags:* `articles`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `limit` - _optional_ - Limit on the number of articles to return
* `text_query` - _optional_ - Search query parameter
* `sort_direction` - _optional_ - Direction of sort (used with sort_by parameter)
* `sort_by` - _optional_ - Field on model to sort by

### Returns a single article

*Tags:* `articles`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Article Id to fetch

### Returns all Categorie's filters

*Tags:* `custom_feed_filters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Creates a new Category filter

*Tags:* `custom_feed_filters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Deletes the Category's filter

*Tags:* `custom_feed_filters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of category filter to delete

### Returns a single Category's filter

*Tags:* `custom_feed_filters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Custom Feed Filter Id to fetch

### Updates a Category Feed Filter

*Tags:* `custom_feed_filters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of category filter to update

### Returns all Categories

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Creates a new Category

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Deletes a new Category

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of category to delete

### Returns a single Category

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Custom Feed Id to fetch

### Updates a Category

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of category to update

### Returns Articles by Category

*Tags:* `custom_feed_articles`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Category Id to fetch
* `limit` - _optional_ - Limit on the number of articles to return
* `sort_by` - _optional_ - Field on model to sort by
* `start` - _optional_ - Field where the fetch will start from
* `created_at_gte_days_ago` - _optional_ - Filter retrieved articles since this date
* `text_query` - _optional_ - Search query parameter

### Duplicates Category

*Tags:* `custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of category to duplicate

### Returns all events

*Tags:* `events`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Creates a new event in the system

*Tags:* `events`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns a single event if the user has access

*Tags:* `events`

#### Input Parameters
* `id` - _required_ - Mongo ID of event to fetch
* `access_token` - _optional_ - OAuth Token
* `vestorly_auth` - _required_ - Vestorly Auth Token

### Returns all groups

*Tags:* `groups`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Creates a new Group

*Tags:* `groups`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Deletes a Group

*Tags:* `groups`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of group to delete

### Returns a single group if user has access

*Tags:* `groups`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Mongo ID of group to fetch

### Updates a Group

*Tags:* `groups`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of group to update

### Returns all MemberEvents

*Tags:* `member_events`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns all member reports

*Tags:* `member_reports`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns all members

*Tags:* `members`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `start` - _optional_ - Skips number of members from start
* `limit` - _optional_ - Number of members to return

### Create a new member in the Vestorly Platform

*Tags:* `members`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns a single member

*Tags:* `members`

#### Input Parameters
* `id` - _required_ - Mongo ID of member to fetch
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Updates a single member

*Tags:* `members`

#### Input Parameters
* `id` - _required_ - Mongo ID of member to fetch
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns all newsletter settings

*Tags:* `newsletter_settings`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns a single newsletter settings if the user has access

*Tags:* `newsletter_settings`

#### Input Parameters
* `id` - _required_ - Mongo ID of newsletter settings to fetch
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Update a single newsletter setting by ID

*Tags:* `newsletter_settings`

#### Input Parameters
* `id` - _required_ - Mongo ID of newsletter settings to update
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Returns all newsletters

*Tags:* `newsletters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Get a newsletter by ID

*Tags:* `newsletters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Mongo ID of event to get

### Updates a newsletter

*Tags:* `newsletters`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Mongo ID of event to update

### Query all posts

*Tags:* `posts`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `text_query` - _optional_ - Filter post by parameters
* `external_url` - _optional_ - Filter by External URL
* `is_published` - _optional_ - Filter by is_published boolean

### Create a new post in the Vestorly Platform

*Tags:* `posts`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Query all posts

*Tags:* `posts`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - ID of post to fetch

### Update A Post

*Tags:* `posts`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of post to update

### Returns all Categories keywords

*Tags:* `seed_custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Creates a new Category Keyword

*Tags:* `seed_custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Deletes a Category keywords

*Tags:* `seed_custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of seed category to delete

### Returns a single Category keyword

*Tags:* `seed_custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - Seed Custom Feed Id to fetch

### Updates a Category keywords

*Tags:* `seed_custom_feeds`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - id of seed category to update

### Login To Vestorly Platform

*Tags:* `sessions`

#### Input Parameters
* `username` - _required_ - Username in the vestorly platform
* `password` - _required_ - Password in Vestorly Platform

### Logout of the vestorly platform

*Tags:* `sessions`

#### Input Parameters
* `vestorly_auth` - _required_ - Authenication token
* `id` - _required_ - ID of pet to session

### Returns all sources

*Tags:* `sources`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Create source

*Tags:* `sources`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token

### Get Source By ID

*Tags:* `sources`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - ID of source to fetch

### Update Source By ID

*Tags:* `sources`

#### Input Parameters
* `vestorly_auth` - _required_ - Vestorly Auth Token
* `access_token` - _optional_ - OAuth Token
* `id` - _required_ - ID of source to fetch

## License

**flow**ground :- Telekom iPaaS / vestorly-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
