import type { MenuListOption } from '@components/MenuList';

export const menuOptions: MenuListOption[] = [
  { value: 'aiur', label: 'Aiur', icon: 'orbit' },
  { value: 'arrakis', label: 'Arrakis', icon: 'orbit' },
  { value: 'braxis', label: 'Braxis', icon: 'orbit' },
  {
    value: 'ceres-station',
    label: 'Ceres Station',
    icon: 'orbit',
    disabled: true,
  },
  { value: 'laconia', label: 'Laconia', icon: 'orbit' },
  { value: 'mar-sara', label: 'Mar Sara', icon: 'orbit' },
  {
    value: 'preservation-station',
    label: 'Preservation Station',
    icon: 'orbit',
  },
  { value: 'vogsphere', label: 'Vogsphere', icon: 'orbit' },
];
