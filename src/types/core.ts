import type { Mapping } from '../kernel'

export type AnyClass = abstract new (...args: any) => any;

export type Class = {
  behavior?: any;
  new(...args: any[]): any;
  [x: string | symbol]: any
}

export type IVue<T extends AnyClass> = InstanceType<T> & IVueToRefs<T>

export interface IVueToRefs<T extends AnyClass> {
  toRefs: (...args: any) => InstanceType<T>
}

export interface IVueToRefsObj<T extends object> {
  toRefs: (...args: any) => T
}

export type MappingScope = 'singleton' | 'transient'

export type ConstructorArgs<T> = T extends { new(...args: infer P): any } ? P : never[]

export type Getters = { 
  values: { [x: string]: PropertyDescriptor; }, 
  length: number 
}

export type Intercept = {
  return: any,
  mapping: Mapping<any>,
  name?: string,
  self: any,
  args: any
}

export type InterceptOptions = {
  top: boolean,
  scoped: boolean
}

export type InterceptFn = (intercept: Intercept, self: Object, prop: string) => void | true

export type InterceptsMap = {
  before: Map<Function | Class, InterceptFn[]>,
  after: Map<Function | Class, InterceptFn[]>
}

export type InterceptAttachTo = Function | [Class, Function]

export type InterceptsFns = InterceptFn[] | undefined | any

export type Null<T> = T | null

export type AnyObj = Record<string | number | symbol, any>