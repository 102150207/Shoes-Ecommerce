import React from 'react'
import PropTypes from 'prop-types'

const ListPagination = props => {
    const {data, pagination, onChangePagination, handleRemove} = props;
    const {page, limit, totalRow} = pagination;
    const totalPage = Math.ceil(totalRow/limit);

    const handleOnclickChangePage = (page) => {
        if(!onChangePagination) return;
        onChangePagination(page);
    }
    const handleRemoveItemokey = (id)=> {
        if(!handleRemove) return;
        handleRemove(id);
    }

    return (
        <div>
            {
                data ? data.map(item =>(
                    <li 
                        key = {item.id}
                        onClick = {() =>handleRemoveItemokey(item.id)}
                    >
                        {`${item.value + item.id}`}
                    </li>
                )) : ""
            }
            <button 
                disabled = {page <= 1}
                onClick = {() => handleOnclickChangePage(page - 1)}
            >
                Prev
            </button>
            <button  
                disabled = {page >= totalPage}
                onClick = {() => handleOnclickChangePage(page + 1)}
            >
                Next
            </button>
        </div>
    )
}

ListPagination.propTypes = {
    data : PropTypes.array,
    pagination : PropTypes.object,
    onChangePagination : PropTypes.func,
    handleRemove : PropTypes.func
}

ListPagination.defaultProps = {
    data : [],
    pagination : {},
    handleRemove : null,
    onChangePagination : null
}

export default ListPagination
