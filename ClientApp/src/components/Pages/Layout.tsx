import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                <div className="container">
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}