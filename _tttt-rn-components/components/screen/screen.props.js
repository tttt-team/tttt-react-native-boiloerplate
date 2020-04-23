export const props = {
    children: {
        type: 'ReactNode',
        required: false,
    },
    style: {
        type: 'object',
        required: false,
    },
    preset: {
        type: 'object',
        required: false,
    },
    backgroundColor: {
        type: 'string',
        required: false,
    },
    statusBar: {
        type: 'enum',
        enum: ['light-content', 'dark-content'],
        required: false,
    },
    unsafe: {
        type: 'boolean',
        required: false,
    },
    keyboardOffset: {
        type: 'object',
        required: false,
    },
};
