import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import Header from "@site/src/components/Headr";

import DownloadConfig from "@site/static/config/download.json";

function HomepageContent() {
    return (
        <div className="mt-5 main">
            <div className="container">
                <section className="row">
                    <div className="col-12 col-sm-9 col-md-5">
                        <div className="container mt-5">
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
                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                    <Translate id="home.downloadShow.button"></Translate>
                                </button>
                                <div id="exampleModal" className="modal fade" tabIndex={-1}
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">

                                        <div className="modal-content">
                                            <ul style={{backgroundColor: '#fff', width: '100%'}}
                                                className="dropdown-menu show">
                                                <li>
                                                    <h6 className="dropdown-header">
                                                        <Translate id="home.downloadShow.title"></Translate>
                                                    </h6>
                                                </li>
                                                <table className="table table-borderless table-striped table-lg"
                                                       style={{margin: '0', width: 'calc(100% + 0)'}}>
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
                                                        <th scope="col" className="text-center" colSpan={4}>
                                                            Android
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Google Play</th>
                                                        <td>Android platform</td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.Android["Google Play"].formal}
                                                               target="_blank">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.Android["Google Play"].test}
                                                               target="_blank">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">F Droid</th>
                                                        <td>Android platform</td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.Android["F Droid"].formal}
                                                               target="_blank">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="bi bi-x-circle"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Github BFBAN Build</th>
                                                        <td>Android platform</td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.Android.Github.formal}
                                                               target="_blank"
                                                               data-bs-toggle="tooltip" data-bs-placement="top">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="bi bi-x-circle"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" className="text-center" colSpan={4}>
                                                            Harmony
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">HuaiWei Store</th>
                                                        <td>Harmony platform</td>
                                                        <td className="text-center">
                                                            <i className="bi bi-x-circle"></i>
                                                        </td>
                                                        <td className="text-center">
                                                        <i className="bi bi-x-circle"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col" className="text-center" colSpan={4}>
                                                            Apple
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Apple Store</th>
                                                        <td>ios or macos platform</td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.ipa["Apple Store"].formal}
                                                               target="_blank">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a href={DownloadConfig.ipa["Apple Store"].test}
                                                               target="_blank">
                                                                <i className="bi bi-arrow-down-circle-fill"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <li className="dropdown-item-text">
                                                    <div className="row align-items-center">
                                                        <div className="col-9">
                                                            <p>
                                                                <span className="badge text-bg-primary">
                                                                    <Translate
                                                                        id="home.downloadShow.fromFormal"></Translate>
                                                                </span>
                                                                <span className="badge text-bg-light">android</span>
                                                                <span className="badge text-bg-light">ios</span>
                                                            </p>
                                                            <Translate
                                                                id="home.downloadShow.downloadQRCode"></Translate>
                                                        </div>
                                                        <div className="col-3">
                                                            <img src="/images/app_auto_qr.png" width="60px"
                                                                 height="60px"/>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li><h6 className="dropdown-header">
                                                    <Translate id="home.other"></Translate>
                                                </h6></li>
                                                <li className="row m-1 align-items-center">
                                                    <div className="col pl-1">
                                                        <i className="bi bi-arrow-up-right-square"></i>&emsp;
                                                        <a href="./privacy" target="_blank">
                                                            <Translate id="agreement.privacyAgreement"></Translate>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="row m-1 align-items-center">
                                                    <div className="col pl-1">
                                                        <i className="text-right mr-3bi bi-arrow-up-right-square"></i>&emsp;
                                                        <a href="./agreement" target="_blank">
                                                            <Translate id="agreement.userAgreement"></Translate>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

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
                                        <li key={index}>
                                            <a className="dropdown-item" href={item.u} key={item.u} target="_blank">
                                                <Translate id={"home.downloadMore." + item.n}></Translate>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-7 exhibition-box" style={{height: '700px'}}>
                        <img src="./images/exhibition.png" className="exhibition"/>
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
        </Layout>
    );
}
