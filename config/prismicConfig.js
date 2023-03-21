// node-fetch is used to make network requests to the Prismic Rest API. 
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const repoName = 'teas' // Fill in your repository name.
const accessToken = 'MC5aQllMNXhBQUFDQUFZME1l.77-977-977-9b--_ve-_ve-_vSdA77-9Ae-_ve-_ve-_vU3vv70X77-977-977-977-9LCIA77-9Vu-_vUt-BGgC' // If your repository is private, add an access token.

// The `routes` property is your Route Resolver. It defines how you will 
// structure URLs in your project. Update the types to match the Custom 
// Types in your project, and edit the paths to match the routing in your 
// project.
const routes = [
  {
    type: 'product',
    path: '/product',
  },
]

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})
