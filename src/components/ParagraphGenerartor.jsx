import { useState } from "react";
import "../App.css"
import axios from "axios"
function ParagraphGenerator(){
    const [para,setPara]=useState([]);
    const [numParagraphs,setnumParagraphs]=useState(0);
   
    const handleNumofpara=(e)=>{
      setnumParagraphs(e.target.value);
    };

    async function fetchPara(){
     const response=await axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numParagraphs}&format=json`)
     setPara(response.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPara();
    };

    return (
        <>
        <div className="wrapper">
            <h1>Create some boring Lorem paragraphs</h1>
            <form onSubmit={handleSubmit}>
                <input type=""
                value={numParagraphs}
                onChange={handleNumofpara}
                />
                <button onClick={fetchPara}>Generate-Paragraph</button>
            </form>
            {para.map((data,index)=>(
                <h2 className="randomPara" key={index}>{index+1}  :  {data}</h2>
            ))}
        </div>
        </>
    )
}
export default ParagraphGenerator;