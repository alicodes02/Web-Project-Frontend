import Base from "../Components/Base";
const UserProfileCard = () => {
  return (
    <Base>
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
              <div className="user-avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
              </div>
              <h5 className="user-name">someone</h5>
              <h6 className="user-email">someone@gmail.com</h6>
            </div>
            <div className="about">
              <h5 className="mb-2 text-primary">About</h5>
              <p>Web project in progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Base>
  );
};

export default UserProfileCard;