import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          
          <p>We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of customer personal information.
             Our security procedures mean that we may ask to verify your identity before we disclose personal information to you.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;