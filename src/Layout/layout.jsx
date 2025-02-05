import React,{useState,useEffect} from 'react'
import Counter from '../components/Counter'
import RichText from '../components/RichText'

const layout = () => {
  const userId = useState(() => Math.random().toString(36).substr(2, 9));
    const [data, setData] = useState({ Name: "", Address: "", Email: "", Phone: "" });
  
    useEffect(() => {
      const savedData = localStorage.getItem("userData");
      if (savedData) setData(JSON.parse(savedData));
      window.addEventListener("beforeunload", warnUser);
      return () => window.removeEventListener("beforeunload", warnUser);
    }, []);
  
    const warnUser = (e) => {
     
      e.returnValue = "You have unsaved changes!";
    };
  
    const saveData = () => {
      localStorage.setItem("userData", JSON.stringify(data));
      alert("Data saved!");
    };
  return (
    <div className='flex flex-col gap-2 p-3'>
      <div className="grid grid-cols-2 gap-2  ">
        <Counter />
        <RichText />
      </div>
      <div className=" p-6 rounded-lg shadow-lg mt-4 border">
        <h2 className="text-lg">User Data Form</h2>
        <div className=" flex items-center flex-col" >
          {Object.keys(data).map((key) => (
            <input
              key={key}
              type="text"
              value={data[key]}
              onChange={(e) => setData({ ...data, [key]: e.target.value })}
              className="mt-2 p-2 w-full text-black rounded border outline-none"
              placeholder={key}
            />
          ))}

          <button onClick={saveData} className="bg-green-500 px-4 py-2 mt-2 rounded text-lg">Save</button>
        </div>

      </div>




    </div>
  )
}

export default layout
