import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { styled } from 'styled-components';

const PAGE_STEP = 1;

const Pagination = ({ page, limit = 0, total = 0, onPagiChange }) => {
  const totalPage = useMemo(() => {
    if (!limit || !total) {
      return 1;
    }
    return Math.ceil(Number(total) / Number(limit)) || 1;
  }, [limit, total]);

  const pageList = useMemo(() => {
    let start = page - PAGE_STEP;
    let end = page + PAGE_STEP;

    if (start <= 0) {
      start = 1;
      end = start + PAGE_STEP * 2;
      if (end > totalPage) {
        end = totalPage;
      }
    }

    if (end >= totalPage) {
      end = totalPage;
      start = end - PAGE_STEP * 2;
      if (start < 1) {
        start = 1;
      }
    }

    const list = [];
    for (let index = start; index < end + 1; index++) {
      list.push(index);
    }

    return list;
  }, [page, totalPage]);

  const onNext = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPage) {
      onPagiChange(nextPage);
    }
  };

  const onPrev = () => {
    const prevPage = page - 1;
    if (prevPage > 0) {
      onPagiChange(prevPage);
    }
  };

  const onFirst = () => {
    onPagiChange(1);
  };

  const onLast = () => {
    onPagiChange(totalPage);
  };

  return (
    <nav aria-label="Page navigation" className='mt-4'>
      <PagiStyled className="pagination flex justify-center items-center rounded-none mb-1">
        <PagiItem isDisabled={page === 1} onClick={onPrev}>
          <span aria-hidden="true">
          <CaretLeftOutlined />
          </span>
          Prev
        </PagiItem>
        <PagiItem isDisabled={pageList[0] === 1} onClick={onFirst}>
          First
        </PagiItem>
        {pageList?.length > 0 &&
          pageList.map((pageNumb) => (
            <PagiItem
              key={pageNumb}
              isActive={pageNumb === page}
              onClick={() => {
                onPagiChange(pageNumb);
              }}
            >
              {pageNumb}
            </PagiItem>
          ))}
        <PagiItem className="page-item-total text-[#cccccc] ml-5 font-normal">
          of {totalPage}
        </PagiItem>
        <PagiItem
          isDisabled={pageList[pageList.length - 1] === totalPage}
          onClick={onLast}
        >
          Last
        </PagiItem>
        <PagiItem
          isDisabled={pageList[pageList.length - 1] === page}
          onClick={onNext}
        >
          Next
          <span aria-hidden="true">
          <CaretRightOutlined />
          </span>
        </PagiItem>
      </PagiStyled>
    </nav>
  );
};

const PagiItem = ({
  children,
  isActive = false,
  isDisabled = false,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <PagiItemWrapper
      className={`page-item ${className} ${isActive ? 'active' : ''} ${
        isDisabled ? 'disabled' : ''
      }`}
      onClick={() => (isDisabled ? {} : onClick())}
      {...props}
    >
      <a className="page-link" role="button">
        {children}
      </a>
    </PagiItemWrapper>
  );
};

const PagiStyled = styled.ul`
  .page-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 3rem;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    padding: 0 0.3rem;
    line-height: 1;
    color: #706f6c;
    border-radius: 0.3rem;
    background-color: transparent;
    border: 0.1rem solid transparent;
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
    }

    &:hover,
    &:focus {
      box-shadow: none;
      border-color: #ebebeb;
      text-decoration: none;
      background-color: transparent;
      outline: none !important;
    }

    &.page-link-prev {
      margin-right: 1.7rem;

      i {
        margin-left: 0;
        margin-right: 1rem;
      }
    }

    &.page-link-next {
      margin-left: 1.8rem;

      i {
        margin-left: 1rem;
        margin-right: 0;
      }
    }

    &.page-link-prev,
    &.page-link-next {
      padding-left: 1rem;
      padding-right: 1rem;
      min-width: 70px;
    }
  }

  .page-item + .page-item {
    margin-left: 0.4rem;
  }

  .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .page-item.active .page-link {
    color: #fcb941;
    background-color: transparent;
    border-color: #ebebeb;
  }

  .page-item.disabled .page-link {
    border-color: transparent;
    color: #eaeaea;
  }
`;

const PagiItemWrapper = styled.li`
  margin: 0 10px;
  .page-link {
    &:hover {
      color: #fcb941 !important;
    }
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;

export default Pagination;
