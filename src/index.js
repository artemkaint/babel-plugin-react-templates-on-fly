import { parse } from 'babylon-react-templates-parser';

export default () => ({
    parserOverride: (code, opts, parser) => parse(code, {
        ...opts,
        parser: {
            parse: (source) => parser(source, opts)
        },
    })
});
