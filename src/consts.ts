export const FILTERS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
} as const
export const FILTERS__BUTTON = {
  [FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${FILTERS.ACTIVE}`
  },
  [FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${FILTERS.ALL}`
  },
  [FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${FILTERS.COMPLETED}`
  }
} as const
