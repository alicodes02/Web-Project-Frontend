import Base from "../Components/Base";
const UserProfileDetails = () => {
  return (
    <Base>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h4 className="mb-3 ">Personal Details</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="eMail">Email</label>
                <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website">Website URL</label>
                <input type="url" className="form-control" id="website" placeholder="Website url" />
                <h4 className="mb-3" style={{ marginLeft: '-660px', marginTop:'5%' }}>Address</h4>

              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="Street">Street</label>
                <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="ciTy">City</label>
                <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="sTate">State</label>
                <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="zIp">Zip Code</label>
                <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Base>
  );
};

export default UserProfileDetails;
