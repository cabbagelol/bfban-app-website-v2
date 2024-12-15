import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Header from "@site/src/components/Headr";

import Footer from "@site/src/components/Footer";
import {useBrokenLinksContext} from "@docusaurus/core/lib/client/BrokenLinksContext";
import useBrokenLinks from "@docusaurus/useBrokenLinks";

export default function ContactPage({}) {
    return (
        <Layout>
            <Header/>
            <main>
                <div className="container mt-5 pb-5" style={{minHeight: '100vh'}}>
                    <h1>Contact My</h1>
                    <p>contacts</p>

                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {[
                            {'p': 'Github', 'url': 'https://github.com/cabbagelol/bfban-app-modile'},
                            {'p': 'Email 1', 'url': 'app@bfban.com'},
                            {'p': 'Email 2', 'url': 'cabbagelol@bfban.com'},
                        ].map((i, index) => (
                            <div className="col">
                                <div
                                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                                    style={{backgroundImage: `url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-${index}.jpg')`}}>
                                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{i.p}</h3>
                                        <ul className="d-flex list-unstyled mt-auto">
                                            <li className="me-auto">
                                                {i.url}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </Layout>
    );
}

