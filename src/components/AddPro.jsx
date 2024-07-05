import React, { useState } from "react";

const AddPro = () => {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        category: "",
        type: "",
        price: "",
        description: "",
        width: "",
        height: "",
        depth: "",
        count: "",
        designer: "",
    });

    const channgeInput = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setFormData({
            ...formData,
            [name]:value
        })
    }
const addPro= async(e)=>{
    e.preventDefault()
    try{
        const res = await fetch("https://6686930083c983911b02cbc5.mockapi.io/mebel",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        })
    }catch(error){
        console.log(error);
    }
    console.log(formData);
}
    return (
        <div>
            <form onSubmit={addPro}>
                <input onChange={channgeInput} type="text" placeholder="Title" value={formData.title} name="title" />
                <input onChange={channgeInput} type="text" placeholder="Price" value={formData.price} name="price" />
                <input onChange={channgeInput} type="text" placeholder="Description" value={formData.description} name="description" />
                <input onChange={channgeInput} type="text" placeholder="Count" value={formData.count} name="count" />
                <input onChange={channgeInput} type="text" placeholder="Designer" value={formData.designer} name="designer" />
                <input onChange={channgeInput} type="text" placeholder="Image" value={formData.image} name="image" />
                <input onChange={channgeInput} type="text" placeholder="Type" value={formData.type} name="type" />
                <input onChange={channgeInput} type="text" placeholder="width" value={formData.width} name="width" />
                <input onChange={channgeInput} type="text" placeholder="height" value={formData.height} name="height" />
                <input onChange={channgeInput} type="text" placeholder="depth" value={formData.depth} name="depth" />
                <input onChange={channgeInput} type="text" placeholder="category" value={formData.category} name="category" />
            <button type="submit">Adddd</button>
            </form>
        </div>
    );
};

export default AddPro;