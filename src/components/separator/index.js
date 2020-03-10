import React from 'react';
import SeparatorStyle from './index.style';
const Separator = ({ withText = 'or' }) => {
    return (
        <SeparatorStyle>
            <div className="separator-line">
                <div className="separator-line--text">{withText}</div>
            </div>
        </SeparatorStyle>
    );
};
export default Separator;
