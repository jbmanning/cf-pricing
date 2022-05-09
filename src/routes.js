import UnboundPricing from './views/unbound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    { path: '/', component: UnboundPricing, meta: { title: 'Unbound', description: 'Unofficial Cloudflare Workers® pricing calculator', logo: 'workers' } },
    { path: '/r2', component: () => import('./views/r2.vue'), meta: { title: 'R2', description: 'Unofficial Cloudflare R2™ pricing calculator', logo: 'r2' } },
]
