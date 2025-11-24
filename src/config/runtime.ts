import type { DiscoverConfig } from 'autodisco'

export function getRuntimeConfig(options: DiscoverConfig) {
  return {
    baseUrl: options.baseUrl,
    headers: options.headers,
  }
}
