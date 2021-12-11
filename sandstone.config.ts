import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'escort',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 8,
  namespace: 'escort',
  packUid: 'EhOjXoZT',
  saveOptions: { path: '/Applications/MultiMC.app/Data/instances/Datapack Development/.minecraft/saves/New World/datapacks' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
