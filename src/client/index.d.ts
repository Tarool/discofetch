export interface paths extends Record<string, any> {}

export interface components {
  schemas: Record<string, any>
  responses: Record<string, any>
  parameters: Record<string, any>
  requestBodies: Record<string, any>
  headers: Record<string, any>
  pathItems: Record<string, any>
}
