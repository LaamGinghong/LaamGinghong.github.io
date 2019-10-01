import React, {PureComponent} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    value: string;
    language: string;
}

class CodeBlock extends PureComponent<Props> {
    public static defaultProps = {
        language: undefined
    };

    public render():
        React.ReactElement<any, string |
        React.JSXElementConstructor<any>> | string
        | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {language, value} = this.props;
        return <SyntaxHighlighter style={monokai} language={language}>
            {value}
        </SyntaxHighlighter>;
    }
}

export default CodeBlock;
