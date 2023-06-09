import { useCallback, useRef } from 'react';

import Button from '../Button/Button.jsx';
import type {
  ComponentProps,
  SlotComponentPropsWithoutOverride,
} from '../components.d.js';
import { useFieldContext } from '../Form/Field.jsx';
import { UploadIcon } from '../icons/solid.jsx';
import { assocDefaultStyle } from '../utils/assign-default-style.js';
import { NO_OP } from '../utils/no-op.js';

export type UploadedFileLikeObject = {
  name: string;
  type: string;
  url: string;
};
interface SlotProps {
  root?: SlotComponentPropsWithoutOverride<'button', object>;
}

type FileUploadProps = ComponentProps<
  SlotProps,
  {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
>;

export default function FileUpload({
  children,
  'data-testid': testId,
  disableDefaultClasses,
  slotProps: givenSlotProps,
  ...rest
}: FileUploadProps) {
  const { formControlContext, id } = useFieldContext({
    onChange: rest.onChange || NO_OP,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const onUploadButtonClick = useCallback(() => {
    inputRef.current!.click();
  }, [inputRef]);

  let slotProps = givenSlotProps;

  if (!disableDefaultClasses) {
    slotProps = assocDefaultStyle<SlotProps>({
      slotWithDefaultClasses: {
        root: 'tw-flex tw-flex-row tw-content-center tw-items-center tw-gap-0.5',
      },
    })(givenSlotProps);
  }

  return (
    <>
      <input
        className={'tw-hidden'}
        data-testid={testId && `${testId}-raw-upload-input`}
        id={id}
        onChange={formControlContext?.onChange}
        ref={inputRef}
        type="file"
      />
      <Button
        data-testid={testId}
        slotProps={{
          root: { ...slotProps?.root, onClick: onUploadButtonClick },
        }}
        {...rest}
      >
        <UploadIcon />
        {children}
      </Button>
    </>
  );
}
