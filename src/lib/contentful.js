import {createClient} from 'contentful';

const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    host: 'preview.contentful.com'
})

export function getLandingPosts () {
    return client.getEntries({
        content_type: 'goBigTemplate'
    })
}

export function getLandingPostBySlug (slug) {
    console.log("THE SLUG", slug, client.getEntries())
    const entry = client.getEntries({
        'content_type': 'goBigTemplate',
        'fields.pageIdentifier': slug,
        'include': 5
    })
    return entry
}
