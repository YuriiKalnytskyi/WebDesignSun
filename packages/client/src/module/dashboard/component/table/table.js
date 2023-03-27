import React, { useState } from 'react';

import { Drawer } from '../../../common/component';
import { CreatePost } from '../create-post';

import * as Styled from './table.styled';
import { Edit, tableHeaders, View } from '../../constants';

export const hasInArray = (arr, value) => {
  const items = arr.findIndex((item) => item.id === value);

  return items !== -1;
};

export const Table = ({ items }) => {
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState({
    flag: false,
    component: '',
    id: ''
  });

  const onDrawer = (flag, component = '', id) => {
    setIsAddDrawerOpen((prev) => {
      prev.flag = flag;
      prev.component = component;
      prev.id = id;

      return { ...prev };
    });
  };

  return (
    <>
      <Styled.Table>
        <Styled.Head>
          <Styled.Row>
            <Styled.HeadRow>
              <Styled.Wrapper>
                <Styled.TextWrapper>{tableHeaders.image}</Styled.TextWrapper>
              </Styled.Wrapper>
            </Styled.HeadRow>
            <Styled.HeadRow>{tableHeaders.author}</Styled.HeadRow>
            <Styled.HeadRow>{tableHeaders.direction}</Styled.HeadRow>
            <Styled.HeadRow>{tableHeaders.title}</Styled.HeadRow>
            <Styled.HeadRow>{tableHeaders.description}</Styled.HeadRow>
            <Styled.HeadRow className="edit" />
          </Styled.Row>
        </Styled.Head>
        <Styled.Body>
          {items
            ? items.map(({ image, direction, title, author, description, id }, index) => (
                <Styled.Row key={index} onClick={onDrawer.bind(this, true, View, id)}>
                  {/* item image */}
                  <Styled.Data>
                    <Styled.Wrapper>
                      {image ? (
                        <Styled.ItemImage src={image} alt={''} />
                      ) : (
                        <Styled.ImagePlaceholderThumb>
                          <Styled.ImagePlaceholder />
                        </Styled.ImagePlaceholderThumb>
                      )}
                    </Styled.Wrapper>
                  </Styled.Data>

                  {/* item direction */}
                  <Styled.Data>{author}</Styled.Data>

                  {/* item direction */}
                  <Styled.Data>{direction}</Styled.Data>

                  {/* item title */}
                  <Styled.Data className="title">
                    <Styled.ItemLabel className="tooltip" linesToTruncate={1} tooltipText={title}>
                      {title}
                    </Styled.ItemLabel>
                  </Styled.Data>

                  {/* item description */}
                  <Styled.Data className="title">
                    <Styled.ItemLabel
                      className="tooltip"
                      linesToTruncate={1}
                      tooltipText={description}
                    >
                      {description}
                    </Styled.ItemLabel>
                  </Styled.Data>

                  {/* edit item button */}
                  <Styled.Data className="edit">
                    <Styled.EditButton
                      onClick={(e) => {
                        e.stopPropagation();
                        onDrawer(true, Edit, id);
                      }}
                    >
                      <Styled.EditIcon />
                    </Styled.EditButton>
                  </Styled.Data>
                </Styled.Row>
              ))
            : null}
        </Styled.Body>
      </Styled.Table>

      <Drawer
        open={isAddDrawerOpen.flag}
        onClose={onDrawer.bind(this, false, '')}
        contentPosition="right"
        slidePosition="right"
      >
        <CreatePost
          component={isAddDrawerOpen.component}
          onCloseDrawer={onDrawer.bind(this, false)}
          id={isAddDrawerOpen.id}
        />
      </Drawer>
    </>
  );
};
