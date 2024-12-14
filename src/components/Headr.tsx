import React from 'react';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Header() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <div>
            {/*<div className="container d-flex align-items-center pt-2 pb-2">*/}
            {/*    <Link to="bfban website">bfban</Link>*/}

            {/*</div>*/}
            {/*<hr className="mt-0"/>*/}
        </div>
    );
}

export default Header;
