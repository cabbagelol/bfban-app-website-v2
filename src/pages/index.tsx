import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

import Header from "@site/src/components/Headr";
import Footer from "@site/src/components/Footer";

function HomepageContent() {
    return (
        <div className="mt-5 main">
            <div className="container">
                <section className="row">
                    <div className="col-12 col-sm-9 col-md-5">
                        <div className="container">
                            <h1>
                                <Translate id="title"></Translate>
                            </h1>
                            <p className="lead text-muted">
                                <Translate id="home.h2"></Translate>
                            </p>
                            <p className="text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                                <Translate id="home.hint"></Translate>
                            </p>
                            <br/>
                            <div className="btn-group">
                                <button className="btn btn-secondary" type="button"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <Translate id="home.downloadShow.button"></Translate>
                                </button>
                                <ul className="dropdown-menu" style={{width: 450}}>
                                    <li><h6 className="dropdown-header">
                                        <Translate id="home.downloadShow.title"></Translate>
                                    </h6></li>
                                    <table className="table table-borderless table-striped table-lg"
                                           style={{margin: '0 -1px 0 -1px', width: 'calc(100% + 2px)'}}>
                                        <thead>
                                        <tr>
                                            <th scope="col" colSpan={2}></th>
                                            <th scope="col" className="text-center">
                                                <span className="badge text-bg-primary">
                                                    <Translate id="home.downloadShow.fromFormal"></Translate>
                                                </span>
                                            </th>
                                            <th scope="col" className="text-center">
                                                <span className="badge text-bg-secondary">
                                                    <Translate id="home.downloadShow.fromTest"></Translate>
                                                </span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Google Play</th>
                                            <td>Android platform</td>
                                            <td className="text-center">
                                                <a href="https://play.google.com/store/apps/details?id=com.cabbagelol.bfban"
                                                   target="_blank">
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                </a>
                                            </td>
                                            <td className="text-center">
                                                <a href="https://play.google.com/apps/testing/com.cabbagelol.bfban"
                                                   target="_blank">
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Apple Store</th>
                                            <td>ios or macos platform</td>
                                            <td className="text-center">
                                                <a href="https://apps.apple.com/us/app/bfban/id6446828173"
                                                   target="_blank">
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                </a>
                                            </td>
                                            <td className="text-center">
                                                <a href="https://testflight.apple.com/join/PulChYQj" target="_blank">
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Github BFBAN Build</th>
                                            <td>Android platform</td>
                                            <td className="text-center">
                                                <a href="https://github.com/bfban/bfban-app-mobile/releases"
                                                   target="_blank"
                                                   data-bs-toggle="tooltip" data-bs-placement="top"
                                                   data-bs-title="更新慢">
                                                    <i className="bi bi-arrow-down-circle-fill"></i>
                                                </a>
                                            </td>
                                            <td className="text-center">
                                                <i className="bi bi-x-circle"></i>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <li className="dropdown-item-text">
                                        <div className="row align-items-center">
                                            <div className="col-9">
                                                <p>
                                                    <span className="badge text-bg-primary">
                                                        <Translate id="home.downloadShow.fromFormal"></Translate>
                                                    </span>
                                                    <span className="badge text-bg-light">android</span>
                                                    <span className="badge text-bg-light">ios</span>
                                                </p>
                                                <Translate id="home.downloadShow.downloadQRCode"></Translate>
                                            </div>
                                            <div className="col-3">
                                                <img src="/images/app_auto_qr.png" width="60px" height="60px"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><h6 className="dropdown-header">
                                        <Translate id="home.other"></Translate>
                                    </h6></li>
                                    <a href="./privacy" target="_blank">
                                        <li className="row align-items-center">
                                            <div className="col">
                                                <button type="button"
                                                        className="btn btn-link">
                                                    <Translate id="agreement.privacyAgreement"></Translate>
                                                </button>
                                            </div>
                                            <div className="col text-right mr-3">
                                                <i className="bi bi-arrow-up-right-square"></i>&emsp;
                                            </div>
                                        </li>
                                    </a>
                                    <a href="./agreement" target="_blank">
                                        <li className="row align-items-center">
                                            <div className="col">
                                                <button type="button" className="btn btn-link">
                                                    <Translate id="agreement.userAgreement"></Translate>
                                                </button>
                                            </div>
                                            <div className="col text-right mr-3">
                                                <i className="bi bi-arrow-up-right-square"></i>&emsp;
                                            </div>
                                        </li>
                                    </a>
                                </ul>
                                <button type="button"
                                        className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    {[{'n': '1', 'u': 'https://docs.qq.com/form/page/DVGNkVlZxWGJMYWhC'},
                                        {'n': '2', 'u': 'https://docs.qq.com/form/page/DVFFMS1lQbFVTUmNZ'},
                                        {'n': '3', 'u': '/docs/intro'},
                                        {'n': '4', 'u': 'https://cabbagelol.net/donations'}].map((item, index) => (
                                        <li>
                                            <a className="dropdown-item" href={item.u} key={item.u} target="_blank">
                                                <Translate id={"home.downloadMore." + item.n}></Translate>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-7 exhibition-box">
                        <img src="/images/exhibition.png" className="exhibition"/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout>
            <Header/>
            <main>
                <HomepageContent/>
            </main>
            <Footer/>
        </Layout>
    );
}