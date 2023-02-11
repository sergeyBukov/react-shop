import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classNames from 'classnames';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={classNames('container', 'main')}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout