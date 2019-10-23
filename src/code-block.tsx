import React, {PureComponent} from 'react';
import {PrismLight} from 'react-syntax-highlighter';
import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

interface Props {
    value: string;
    language: string;
}

class CodeBlock extends PureComponent<Props> {

    constructor(props: Props) {
        super(props);
        PrismLight.registerLanguage('tsx', tsx);
    }


    public render():
        React.ReactElement<any, string |
            React.JSXElementConstructor<any>> | string
        | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {value, language} = this.props;
        return <PrismLight language={language} style={xonokai}>
            {value}
        </PrismLight>;
    }
}

export default CodeBlock;
