import React from "react"

const FeatureSection = ({ headline, title, descr, img, left = false, beta = false, children }) => {
    const ordering1 = left ? "" : " lg:col-start-2";
    const ordering2 = left ? "" : " lg:col-start-1";
    let beta_html = "";
    if (beta) {
        beta_html = <div className="ml-2 px-2 py-1 leading-none text-xs font-semibold rounded-full bg-yellow-300 text-white">Beta</div>;
    }
    return (
        <div className="relative mt-18 sm:mt-16 lg:mt-32">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-32 lg:items-center">
                <div className={ordering1}>
                    <span className="text-base text-blue-600 font-semibold tracking-wide uppercase flex items-center">
                        {headline}
                        {beta_html}
                    </span>
                    <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        {title}
                    </h3>
                    <p className="mt-6 text-xl text-gray-500 font-light leading-8">
                        {descr}
                    </p>
                </div>
                <div className={"mt-10 -mx-4 relative lg:mt-0 " + ordering2}>
                    {children}
                </div>
            </div>
        </div>
    )
    // }
}

export default FeatureSection