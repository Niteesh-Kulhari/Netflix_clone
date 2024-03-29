import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">

      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
            <button className="userAddButton">Create</button>
        </Link>
      </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="data:image/jpeg;base64,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" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Niteesh Kulhari</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Niteesh Kulahri</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.03.1997</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 469 833 1900</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">nkulhari96@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">333 Fairmount avenue</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="Niteesh Kulari"  className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Niteesh Kulari"  className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="nkulhari96@gmail.com"  className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1 469 833 1900"  className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="333 Fairmount avenue"  className="userUpdateInput"/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="data:image/jpeg;base64,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" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}
