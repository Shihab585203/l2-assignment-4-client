import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/api/baseApi"
import { setCategory } from "../../redux/features/categorySlice";

const Category = () => {
    const {data} = useGetCategoriesQuery(undefined);
    console.log(data?.data)
    const dispatch = useDispatch();

  return (
    <div className="flex gap-4 w-11/12 mx-auto mt-6">
        <h2 className="text-md text-3xl text-center">Categories</h2>
        <button className="btn btn-outline" onClick={ () => dispatch(setCategory("")) }>All</button>
        {
            data?.data?.map((category: string) => (
                <button className="btn btn-outline" key={category} onClick={() => dispatch(setCategory(category))}>
                    {category}
                </button>
            ))
        }
    </div>
  )
}

export default Category