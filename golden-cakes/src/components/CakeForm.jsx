function CakeForm({
  formData,
  handleChange,
  handleSubmit,
  buttonText
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Cake Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="flavor"
        placeholder="Flavor"
        value={formData.flavor}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-[#d4af37] text-black p-2 rounded"
      >
        {buttonText}
      </button>
    </form>
  )
}

export default CakeForm