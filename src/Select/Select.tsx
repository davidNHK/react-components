import MuiOption, {
  OptionOwnerState,
  OptionOwnProps,
} from '@mui/base/Option/index.js';
import MuiSelect, {
  SelectOwnerState,
  SelectOwnProps,
} from '@mui/base/Select/index.js';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';

import {
  ComponentProps,
  SlotComponentPropsWithoutOverride,
} from '../components.d.js';
import { useFieldContext } from '../Form/Field.jsx';
import { assocDefaultStyle } from '../utils/assign-default-style.js';
import { mergeRootSlotPropsToComponentProps } from '../utils/merge-root-slot-props-to-component-prop.js';

interface SlotProps {
  listbox?: SlotComponentPropsWithoutOverride<
    'ul',
    SelectOwnerState<string, false>
  >;
  popper?: SlotComponentPropsWithoutOverride<
    'div',
    SelectOwnerState<string, false>
  >;
  root?: SlotComponentPropsWithoutOverride<
    'button',
    SelectOwnerState<string, false>
  >;
}

export type SelectProps = ComponentProps<
  SlotProps,
  SelectOwnProps<string, false>
>;

export default function Select({
  disableDefaultClasses,
  slotProps,
  ...rest
}: SelectProps) {
  const { formControlContext, id } = useFieldContext({
    // @ts-expect-error TODO: fix this
    onChange: rest.onChange,
    value: rest.value,
  });
  const slotPropsWithDefaultStyle = useMemo<SlotProps | undefined>(
    () =>
      disableDefaultClasses
        ? slotProps
        : assocDefaultStyle<SlotProps>({
            slotWithDefaultClasses: {
              listbox: clsx(
                'tw-m-0 tw-mt-1 tw-flex tw-flex-col tw-border-2 tw-border-primary tw-pt-0.5',
              ),
              popper: clsx('tw-z-10'),
              root: (state: SelectOwnerState<string, false>) => {
                if (state.open)
                  return clsx(
                    "tw-cursor-default tw-border-0 tw-bg-disabled tw-px-2 tw-py-1 tw-text-disabled after:tw-float-right after:tw-content-['▴']",
                  );
                return clsx(
                  "tw-border tw-border-primary tw-bg-white tw-px-2 tw-py-1 tw-text-primary after:tw-float-right after:tw-content-['▾']",
                );
              },
            },
          })(slotProps),
    [disableDefaultClasses, slotProps],
  );
  const connectMuiSelectToFormContext = useCallback(
    (_: unknown, value: string | null) => {
      if (!formControlContext?.onChange) return;
      formControlContext.onChange({
        target: { value },
      } as any);
    },
    [formControlContext],
  );
  return (
    <MuiSelect
      id={id}
      onChange={connectMuiSelectToFormContext}
      slotProps={slotPropsWithDefaultStyle}
      {...rest}
    />
  );
}
interface SelectOptionSlotProps {
  root?: SlotComponentPropsWithoutOverride<'li', OptionOwnerState<string>>;
}

export type SelectOptionProps = ComponentProps<
  SelectOptionSlotProps,
  OptionOwnProps<string>
>;
export function SelectOption({
  disableDefaultClasses,
  slotProps,
  value,
  ...rest
}: SelectOptionProps) {
  const slotPropsWithDefaultStyle = useMemo<SlotProps | undefined>(
    () =>
      disableDefaultClasses
        ? slotProps
        : assocDefaultStyle<SlotProps>({
            slotWithDefaultClasses: {
              root: (state: OptionOwnerState<string>) => {
                if (state.disabled)
                  return clsx(
                    'tw-cursor-default tw-bg-disabled tw-text-center tw-text-disabled',
                  );
                if (state.selected)
                  return clsx(
                    'tw-cursor-default tw-bg-primary tw-text-center tw-font-bold tw-text-primary',
                  );
                return clsx(
                  'tw-cursor-default tw-bg-white tw-px-1 tw-text-center tw-text-primary hover:tw-cursor-pointer hover:tw-bg-primary hover:tw-text-primary',
                );
              },
            },
          })(slotProps),
    [disableDefaultClasses, slotProps],
  );
  const rootProps = mergeRootSlotPropsToComponentProps()(
    slotPropsWithDefaultStyle,
    rest,
  );

  return (
    <MuiOption
      {...rootProps}
      data-value={value}
      slotProps={slotPropsWithDefaultStyle}
      value={value}
    />
  );
}
