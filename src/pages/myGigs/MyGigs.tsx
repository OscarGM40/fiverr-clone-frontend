import { Link } from "react-router-dom";
import "./MyGigs.scss";
const MyGigs = () => {
 return (
   <div className="myGigs">
     <div className="container">
       <div className="title">
         <h1>Gigs</h1>
         <Link to="/add">
           <button>Add New Gig</button>
         </Link>
       </div>
       <table>
         <tr>
           <th>Image</th>
           <th>Title</th>
           <th>Price</th>
           <th>Sales</th>
           <th>Actions</th>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 1</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 2</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 3</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 4</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 5</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
       </table>
       <table>
         <tr>
           <th>Image</th>
           <th>Title</th>
           <th>Price</th>
           <th>Sales</th>
           <th>Actions</th>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 1</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 2</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 3</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 4</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
         <tr>
           <td>
             <img
               className="image"
               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
             />
           </td>
           <td>Gig 5</td>
           <td>88</td>
           <td>123</td>
           <td>
             <img className="delete" src="/img/delete.png" alt="delete" />
           </td>
         </tr>
       </table>
     </div>
   </div>
 );
};
export default MyGigs;
