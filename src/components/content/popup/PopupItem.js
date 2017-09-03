import React from 'react';

const PopupItem = ({num, title, write_date}) => {
    return (
        <tr>
            <td className="text-center">{num}</td>
            <td>{title}</td>
            <td className="text-center">{write_date}</td>
            <td className="text-center">
                <button type="button" className="btn btn-default btn-xs btnModify">수정</button>
                &nbsp;
                <button type="button" className="btn btn-default btn-xs btnDelete">삭제</button>
            </td>
        </tr>
    );
};

export default PopupItem;