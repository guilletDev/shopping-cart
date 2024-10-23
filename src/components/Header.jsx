import { Filters } from "./Filters"

export const Header = ({changeFilters})=>{


    return (
        <section>
            <h2>Shopping cart 🛒</h2>
            <Filters onChange={changeFilters} />
        </section>
    )
}