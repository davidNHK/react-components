import MuiSlider, {
  SliderOwnerState,
  SliderOwnProps,
} from '@mui/base/Slider/index.js';
import clsx from 'clsx';
import React from 'react';

import {
  ComponentProps,
  SlotComponentPropsWithoutOverride,
} from '../../components.d.js';
import { assocDefaultStyle } from '../../utils/assign-default-style.js';
import { useFieldContext } from '../Field.jsx';

interface SlotProps {
  input?: SlotComponentPropsWithoutOverride<'input', SliderOwnerState>;
  mark?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  markLabel?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  rail?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  root?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  thumb?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  track?: SlotComponentPropsWithoutOverride<'span', SliderOwnerState>;
  valueLabel?: SlotComponentPropsWithoutOverride<
    React.ElementType,
    SliderOwnerState
  >;
}

export type SliderProps = ComponentProps<SlotProps, SliderOwnProps>;

export default function Slider({
  disableDefaultClasses,
  slotProps: givenSlotProps,
  ...rest
}: SliderProps) {
  const { formControlContext, id } = useFieldContext();
  if (formControlContext === undefined) {
    return null;
  }
  let slotProps = givenSlotProps;

  if (!disableDefaultClasses) {
    slotProps = assocDefaultStyle<SlotProps>({
      slotWithDefaultClasses: {
        rail: clsx(
          'tw-block tw-h-1 tw-w-full tw-rounded-sm tw-bg-secondary-bg hover:tw-bg-secondary-bg-hover',
        ),
        root: clsx(
          'tw-relative tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-items-center',
        ),
        thumb: clsx(
          'tw-absolute tw--ml-1.5 tw--mt-[0.15rem] tw-h-2 tw-w-2 tw-rounded-[50%] tw-border-2 tw-border-primary-border tw-bg-primary-bg hover:tw-border-primary-border-hover hover:tw-bg-primary-bg-hover',
        ),
        track: clsx(
          'tw-absolute tw-block tw-h-1 tw-w-full tw-rounded-sm tw-bg-secondary-bg hover:tw-bg-secondary-bg-hover',
        ),
      },
    })(givenSlotProps);
  }
  return (
    <MuiSlider
      id={id}
      onBlur={formControlContext.onBlur}
      onChange={e => {
        formControlContext.onChange?.(
          e as unknown as React.ChangeEvent<HTMLInputElement>,
        );
      }}
      slotProps={slotProps}
      value={formControlContext.value as number}
      {...rest}
    />
  );
}
