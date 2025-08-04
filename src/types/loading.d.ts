import type { DeviceType } from './devices'

export type LoadingEagerCuntMap = Record<DeviceType, number>
export type LoadingStrategy = 'eager' | 'lazy'
