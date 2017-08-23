import React from 'react';

const PopupItem = ({num, title}) => {
    return (
        <tr>
            <td className="text-center">{num}</td>
            <td>{title}</td>
            <td className="text-center">2012-10-10</td>
            <td className="text-center">
                <button type="button" className="btn btn-default btn-xs btnModify">수정</button>
                &nbsp;
                <button type="button" className="btn btn-default btn-xs btnDelete">삭제</button>
            </td>
        </tr>
    );
};

export default PopupItem;