import img_del from "../assets/del.png"
import update from "../assets/update.png"
function Displayasks(props){
    return(
  <div className="taskcontent">
   
 <input  onChange={(e)=>{props.handleTaskChange(e)}} value={props.newtask} type="text"/>
 <button onClick={()=> {props.handleUpdateClick(props.index)}} ><img className="del" src={update} alt="" /></button>
 <button onClick={()=> {props.handleDeleteClick(props.index)}}><img className="del" src={img_del} alt="" /></button>
   
  </div>
    )

}
export default Displayasks