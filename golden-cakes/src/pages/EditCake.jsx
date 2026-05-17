import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { updateCake } from "../services/api"
import CakeForm from "../components/CakeForm"

function EditCake() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    price: "",
    description: "",
    image: ""
  })

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cakes/${id}`)
      .then((response) => setFormData(response.data))
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await updateCake(id, formData)

    navigate("/products")
  }

  return (
    <CakeForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="Update Cake"
    />
  )
}

export default EditCake