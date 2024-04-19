import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - E Gift Shoppie app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          “Day 1” mentality is our approach of doing everything with the energy and entrepreneurial spirit of a new organisation on its first day.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;