
const FilterConfig = () => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label htmlFor="field" className="block">
      <p>Choose Field:</p>
      <select name="field-select" id="field" className="w-full p-1">
        <option value="" disabled>Choose Field</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="gender">Gender</option>
      </select>
      </label>

      <label htmlFor="operator" className="block">
      <p>Choose Operator:</p>
      <select name="operator-select" id="operator" className="w-full p-1">
        <option value="" disabled>Choose Operator</option>
        <option value=">">Greater than {"(>)"}</option>
        <option value="=">Equals to {"(=)"}</option>
        <option value="<">Less than {"(<)"}</option>
      </select>
      </label>

      <label htmlFor="value" className="block">
      <p>Enter Value:</p> 
      <input type="text" id="value" placeholder="Enter value" className="p-1 border border-gray-600"/>
      </label>
    </div>
  )
}

export default FilterConfig
