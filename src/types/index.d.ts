import type { DiscoverConfig } from 'autodisco'
import type { OpenAPITSOptions } from 'openapi-typescript'

export interface Config extends Omit<DiscoverConfig, 'outputDir' | 'generate'> {
  generate?: {
    zod?: NonNullable<DiscoverConfig['generate']>['zod']
    typescript?: OpenAPITSOptions
  }

  public?: boolean
}

export interface RuntimeConfig extends Pick<DiscoverConfig, 'baseUrl' | 'headers' | 'logger'> {}

export interface Paths {}
