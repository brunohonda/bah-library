type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

type Iconable = RequireAtLeastOne<{ icon: string; svgIcon: string; }, 'icon' | 'svgIcon'>;

export type FabMenuItem = {
  id?: string;
  color?: string;
  label: string;
} & Iconable;
