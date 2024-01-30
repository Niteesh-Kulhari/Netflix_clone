import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form  className="newUserForm">
        <div className="newUserItem">
          <label >Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label >Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label >Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label >Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label >Phone</label>
          <input type="email" placeholder="j+1 469 833 1900" />
        </div>
        <div className="newUserItem">
          <label >Address</label>
          <input type="email" placeholder="333 Fairmount Ave" />
        </div>
        <div className="newUserItem">
          <label >Gender</label>
          <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male"/>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female"/>
              <label for="female">Female</label>
              <input type="radio" name="gender" id="others" value="others"/>
              <label for="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUSerButton">Create</button>
      </form>
    </div>
  )
}
