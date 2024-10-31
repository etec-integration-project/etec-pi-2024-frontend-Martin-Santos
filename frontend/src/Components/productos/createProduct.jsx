import "./productos.css";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export default function CreateProduct() {

    const navigate = useNavigate

    const [formData, setForm] = useState({
        name: "",
        price: "",
        urlImage: "",
      });
    
      const handleChange = (e) => {
        setForm({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    

    async function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        // const formData = new FormData(event.target)
        // const product = Object.fromEntries(formData.entries())

        if(!formData.name || !formData.price || !formData.urlImage){
            alert("Please fill all the fields")

            return
        }

        try {
            const response = await axios.post("/app/autenticacion/createProducts", {
                name: formData.name,
                price: formData.price,
                urlImage: formData.urlImage
            })

            const data = await response.json()

            if(response.ok){
                //Product created correctly!
                navigate("/productos")
            }
            else if(response === 400) {
                alert("Validation errors")
            }
            else{
                alert("Unable to create product!")
            }
        } catch (error) {
            alert("Product Created")
            // alert("Unable to connect to the server!")
        }
    }
        
    return (
        <section>
            <div className="createProductForm">
                <div className="form-create-product">
                    <h2 className="title-create">Create Product</h2>

                    <form onSubmit={handleSubmit} method="post">
                        <div className="inputbox">
                            <label htmlFor="">Name</label>
                            <div>
                                <input type="text" name="name" onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className="inputbox">
                            <label htmlFor="">Price</label>
                            <div>
                                <input type="number" name="price" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="inputbox">
                            <label htmlFor="">Image</label>
                            <div>
                                <input type="text" name="urlImage" onChange={handleChange}/>
                            </div>
                        </div>

                        <div>
                            
                            <div>
                                <button type="submit">Button</button>
                            </div>
                        </div>

                        
                    </form>
                </div>

            </div>
        </section>
        
    );
};