import { useState } from "react"
import { addCake } from "../services/api"
import { useNavigate } from "react-router-dom"
import CakeForm from "../components/CakeForm"

function AddCake() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    price: "",
    description: "",
    image: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addCake(formData)

    navigate("/products")
  }

  return (
    <CakeForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Add Cake"
    />
  )
}

export default AddCake