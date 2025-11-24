import type { components, paths } from 'discofetch/client'

import { useRuntimeConfig } from '#imports'
import createClient from 'openapi-fetch'

export function createDfetch(options?: Parameters<typeof createClient>[0]) {
  return createClient<paths>(options)
}

export function useDfetch(options: Partial<ReturnType<typeof useRuntimeConfig>['discofetch']> = {}) {
  return createDfetch({
    ...(useRuntimeConfig().discofetch
      ? useRuntimeConfig().discofetch
      : useRuntimeConfig().public.discofetch),
    ...options,
  })
}

export type {
  components as DfetchComponents,
  paths as DfetchPaths,
}
