import React from 'react';
import { Container } from '../common/Container';

const Footer = () => {
    return (
        <footer className='bg-secondary py-10'>
            <Container className="px-6 md:px-12">
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center'>
                    <img src="/Img/footer-logo.png" alt="" />
                    <p className='text-[#96ACAF] font-body text-base leading-[28.8px] font-light'>Copyright © {new Date().getFullYear()} Wizia. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;