import React, {useState} from "react";
import styles from '../../Styles/UsersPage.module.scss'

type PaginationPropTypes = {
    totalCount: number
    pageLimit: number
    currentPage: number
    currentPageHandler: (p: number) => void
}
const CustomPagination: React.FC<PaginationPropTypes> = ({totalCount, pageLimit, currentPage, currentPageHandler}) => {

    const portionsAmount = Math.ceil(totalCount / pageLimit)

    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / 10))

    const leftBorder: number = (portionNumber - 1) * pageLimit + 1
    const rightBorder: number = portionNumber * pageLimit


    let pages: number[] = [];
    for (let i = 1; i <= portionsAmount; i++) {
        pages.push(i)
    }


    return (
        <div className={styles.users__pagination}>
            <div>
                <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>Назад
                </button>
            </div>

            {pages
                .filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => <span
                    className={p === currentPage ? styles.users__currentPage : ""}
                    onClick={() => currentPageHandler(p)}>{p}</span>)}
            <div>
                <button disabled={portionNumber >= portionsAmount / 10}
                        onClick={() => setPortionNumber(portionNumber + 1)}>Вперед
                </button>
            </div>

        </div>)

}


export default CustomPagination