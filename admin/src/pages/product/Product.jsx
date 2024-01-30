import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/charts/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons"

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
        <button className="productCreateButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://media.wired.com/photos/632b71c4f1e5c40d2b1bc705/3:2/w_2400,h_1600,c_limit/AirPods-Pro-2nd-Gen-Gear.jpg" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In Stock:</span>
                    <span className="productInfoValue">No</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
      <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://media.wired.com/photos/632b71c4f1e5c40d2b1bc705/3:2/w_2400,h_1600,c_limit/AirPods-Pro-2nd-Gen-Gear.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
