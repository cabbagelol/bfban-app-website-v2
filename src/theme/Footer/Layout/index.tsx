import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/Footer/Layout';
import styles from "@site/src/css/footer.css";
import Translate from "@docusaurus/Translate";

export default function FooterLayout({
  style,
}: Props): JSX.Element {
  return (
      <footer
          className={clsx('footer', {
              'footer--dark': style === 'dark',
          })}>
          <div className={clsx("footer", styles)}>
              <hr className="d-block mt-0"/>
              <div className="container pt-3 pb-5">
                  <div className="row">
                      <div className="col-9">
                          <Translate id="footer.main.title"
                                     values={{endTime: new Date().getFullYear()}}></Translate><br/>
                          <span className="site-footer-content"><Translate
                              id="footer.main.description"></Translate></span>
                      </div>
                      <div className="col-3 text-right">
                          <svg height="50" xmlns="http://www.w3.org/2000/svg" width="50">
                              <g transform="scale(.4) translate(50, 12)">
                                  <path stroke="#000"
                                        d="m21.054845,6.553957c-4.29931,3.25323 -7.53805,6.56319 -10.92111,12.82111c-3.38307,6.25793 -4.74379,9.79716 -6.2871,14.84228c-1.54331,5.04513 -3.8268,17.22095 -3.46909,22.98968c0.35771,5.76873 0.47784,7.85769 2.52966,12.88058c2.05182,5.02289 3.59163,6.633 6.43001,8.94553c2.83838,2.31254 5.04028,4.19811 11.07306,7.35236c6.03278,3.15424 12.59586,5.14369 18.96779,6.15381c1.59299,0.25252 5.71691,0.73565 8.45737,0.63246c2.74046,-0.10319 5.02055,-0.79269 6.61808,-1.6547c3.19506,-1.72403 4.70823,-4.25139 1.16661,-6.95969c-3.54162,-2.7083 -13.14569,-10.50779 -17.65838,-15.04963c-4.51269,-4.54184 -9.46431,-10.56284 -13.53094,-17.97337c-4.06662,-7.41053 -3.21221,-15.01469 -2.34441,-17.21861c0.8678,-2.20392 1.31071,-2.42463 2.34284,-3.27444c1.03213,-0.84981 2.63878,-1.3702 4.4456,-1.43696c1.80682,-0.06676 6.29253,1.24014 8.00418,2.50796c1.71165,1.26782 6.84634,3.11291 10.68547,3.22481c3.83913,0.1119 6.80926,-2.2711 7.77394,-4.36382c0.96468,-2.09272 1.53376,-5.30566 0.12068,-9.26824c-1.41308,-3.96257 -0.7816,-6.06437 -2.79946,-9.02092c-2.01786,-2.95655 -3.76492,-4.77411 -8.32044,-7.30289c-4.55552,-2.52878 -7.06418,-2.32771 -11.38751,-2.55215c-4.32332,-0.22443 -9.7472,2.09823 -11.89685,3.72484z"
                                        fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#fff"></path>
                                  <path
                                      d="m39.721669,4.606055c4.18919,-1.8919 6.89191,-2.56758 10.27029,-2.97298c3.37838,-0.4054 8.91893,-0.54054 9.05407,0.54054c0.13513,1.08109 -3.24326,2.83783 -4.32434,4.05405c-1.08108,1.21622 -3.10811,3.3784 -4.05406,5.94597c-0.94595,2.56756 -15.13516,-5.67569 -10.94596,-7.56758z"
                                      fillOpacity="null" strokeOpacity="null" strokeWidth="0" stroke="#000"
                                      fill="#fff"></path>
                              </g>
                          </svg>

                          <svg className="icon"
                               style={{width: 30}}
                               viewBox="0 0 1024 1024"
                               version="1.1"
                               xmlns="http://www.w3.org/2000/svg" p-id="6842" width="15" height="15">
                              <path
                                  d="M952.311 921.329l-409.418-410.41 407.261-408.248c8.53-8.551 8.53-22.416 0-30.967-8.532-8.552-22.36-8.552-30.892 0L511.999 479.952 104.737 71.704c-8.53-8.552-22.362-8.552-30.892 0-8.53 8.552-8.53 22.417 0 30.967L481.107 510.92 71.687 921.33c-8.529 8.551-8.529 22.416 0 30.967a21.755 21.755 0 0 0 15.448 6.413c5.59 0 11.181-2.139 15.446-6.413L512 541.886l409.419 410.41a21.755 21.755 0 0 0 15.446 6.413c5.592 0 11.18-2.139 15.447-6.413 8.53-8.55 8.53-22.417 0-30.967z"
                                  fill="#fff" p-id="6843"></path>
                          </svg>

                          <a href="https://bfban.com">
                              <img
                                  className="ml-3"
                                  src="https://github.com/BFBAN/exterior-design/blob/main/Materials/friendly-web.png?raw=true"
                                  width="100"/>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
}
