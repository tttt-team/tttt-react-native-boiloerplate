import { isNil } from 'ramda';

import { color } from '../../theme/default';

export const offsets = {
    none: 0,
};

export const presets = {
    fixed: {
        outer: {
            backgroundColor: color.background,
            flex: 1,
            height: '100%',
        },
        inner: {
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            height: '100%',
            width: '100%',
        },
    },
    scroll: {
        outer: {
            backgroundColor: color.background,
            flex: 1,
            height: '100%',
        },
        inner: {
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },
    },
};

export const isNonScrolling = preset => {
    return isNil(preset) || !preset.length || isNil(presets[preset]) || preset === 'fixed';
};
