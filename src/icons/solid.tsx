import {
  ArrowUpTrayIcon as _UploadIcon,
  MicrophoneIcon as _MicrophoneIcon,
  PauseIcon as _PauseIcon,
  PlayIcon as _PlayIcon,
  SpeakerWaveIcon as _VolumeUpIcon,
  StopIcon as _StopIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import type React from 'react';

import { icon } from '../theme.js';

function withHeroIcon(HeroIcon: React.FunctionComponent) {
  return function Wrapper(props: React.ComponentProps<'svg'>) {
    const className = clsx(
      icon.solid.width,
      icon.solid.height,
      ...(props.className ?? '').split(' '),
    );
    return <HeroIcon className={className} {...props} />;
  };
}
export const PauseIcon = withHeroIcon(_PauseIcon);
export const PlayIcon = withHeroIcon(_PlayIcon);
export const VolumeUpIcon = withHeroIcon(_VolumeUpIcon);
export const MicrophoneIcon = withHeroIcon(_MicrophoneIcon);
export const StopIcon = withHeroIcon(_StopIcon);
export const UploadIcon = withHeroIcon(_UploadIcon);
