export default function Addnewperson(){
    return(
        <div id="box2">
        <div id="box2button"><b>Add New Person</b></div>
        {/* <div id="grid">
          <div id="gridElement1">Name</div>
          <div id="gridElement1">Date of birth</div>
          <div id="gridElement1">Adhar No.</div>
          <div id="gridElement1">Mobile No.</div>
          <div id="gridElement1">Age</div>
          <div id="gridElement1">Action</div>
          <div id="gridElement"><input type="text" /></div>
          <div id="gridElement"><input type="date" /></div>
          <div id="gridElement"><input type="number" /></div>
          <div id="gridElement"><input type="number" /></div>
          <div id="gridElement"><input type="number" /></div>
          <div id="gridElement"><a  id="save" href="save">save </a> <a id="dele" href="save">delete</a></div>
        </div> */}
        <table>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Adhar No.</th>
            <th>Mobile No.</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><input type="text" /></td>
            <td><input type="date" /></td>
            <td><input type="number" /></td>
            <td><input type="number" /></td>
            <td><input type="number" /></td>
            {/* <td><a  id="save" href="save">save </a> <a id="dele" href="save">delete</a></td> */}
            <td><button id="save">Save</button><button id="dele">Delete</button></td>
          </tr>
        </table>

        <button id="addbtn">ADD</button>
      </div>
    )
}