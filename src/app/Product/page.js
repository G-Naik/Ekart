import Filters from "../Components/Filters"
import Product from "../Components/Product"

const product = () => {
  return (
    <div>
        <div className="md:flex ">
          <div className="w-1/6 hidden md:block">
            <Filters/>
          </div>
          <div>
            <Product />
          </div>
          <div className="sm:hidden">
            <Filters/>
          </div>
        </div>
    </div>
  )
}
export default product