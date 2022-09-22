import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
export default function Landing() {
    return (
        <>
            <section className="banner-section">
                <div className="text-section w-50 position-absolute top-50 start-0  ps-3">
                    <h1 className="text-light ">Manage your Todos</h1>
                    <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia temporibus eius autem a hic deserunt porro facere quam perferendis,
                        repellendus dolor obcaecati odio cumque, repellat, sunt accusantium sint tempore. Deserunt!
                    </p>
                    <div className="">
                        <Link to="/todos" type="button" className="btn btn-lg banner-btn">Manage Todos</Link>
                    </div>
                </div>

                <div className="footer-section position-absolute bottom-0 start-50 translate-middle">
                    <Footer />
                </div>

            </section>
        </>
    )
}