import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

//Styles
const StyledDiv = styled.div`
    margin-top: 50px;
    .my-masonry-grid{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-left: -30px;
        width: auto;
        .my-masonry-grid_column {
            padding-left: 30px; /* gutter size */
            background-clip: padding-box;
            & > div{
                padding-bottom: 5px;
                background: tomato;
                margin-bottom: 30px;
            }
        }
    }
`;

//Masonry Breakpoints for Columns
const breakPointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
}

const CatsImgs = (props) => {

    const catImgs = props.catImgs;

    return(
        <StyledDiv>
            <Masonry
                breakpointCols={breakPointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {catImgs.map(img => (
                    <div key={img.id}>
                        <img src={img.url} alt={img.breeds[0].name} />
                    </div>
                ))}

            </Masonry>
        </StyledDiv>
    );
}

export default CatsImgs;