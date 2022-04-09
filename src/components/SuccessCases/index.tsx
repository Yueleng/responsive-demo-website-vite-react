import { useState } from "react";
import styled from "styled-components";
import IsoTopeGrid from "react-isotope";
import { SectionBg, Title } from "../ContentRegion";
import { useWindowDimensions } from "../../hooks";

interface FilterBtnProps {
  active: boolean;
}

interface CasesProps {
  height: number;
}

const ShowCases = styled(SectionBg)`
  max-width: unset; /*unset previous set max-width*/
  padding: 0;
  padding-top: 72px;
`;

const FilterBtns = styled.div`
  margin-top: 54px;
  margin-bottom: 38px;
`;

const FilterBtn = styled.button<FilterBtnProps>`
  margin: 0 7px;
  background-color: ${(p) =>
    p.active ? "var(--primary-color)" : "var(--secondary-color)"};
  border: 0;
  color: ${(p) => (p.active ? "white" : "var(--text-color-dark-gray)")};
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const Cases = styled.div<CasesProps>`
  position: relative;
  height: ${(p) => p.height}px;
  width: 100vw;

  & .case-item {
    width: 25vw;
    /* 这里没有写错，图片比例为25：20，也就是5：4 */
    height: 20vw;
    overflow: hidden;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

// const btnListInfo = [
//   {
//     label: "全部",
//     key: 0,
//     active: true,
//     filter: ["web", "science", "mobile"],
//   },
//   {
//     label: "WEB",
//     key: 1,
//     active: false,
//     filter: ["web"],
//   },
//   {
//     label: "移动",
//     key: 2,
//     active: false,
//     filter: ["mobile"],
//   },
//   {
//     label: "科研",
//     key: 3,
//     active: false,
//     filter: ["science"],
//   },
// ];

const imgsDefault = [
  {
    id: "a",
    filter: ["WEB", "科研"],
    row: 0,
    col: 0,
    h: 1,
    w: 1,
  },
  {
    id: "b",
    filter: ["WEB", "科研"],
    row: 0,
    col: 1,
    h: 1,
    w: 1,
  },
  {
    id: "c",
    filter: ["WEB"],
    row: 0,
    col: 2,
    h: 1,
    w: 1,
  },
  {
    id: "d",
    filter: ["WEB"],
    row: 0,
    col: 3,
    h: 1,
    w: 1,
  },
  {
    id: "e",
    filter: ["移动"],
    row: 1,
    col: 0,
    h: 1,
    w: 1,
  },
  {
    id: "f",
    filter: ["科技"],
    row: 1,
    col: 1,
    h: 1,
    w: 1,
  },
  {
    id: "g",
    filter: ["移动", "WEB", "科技"],
    row: 1,
    col: 2,
    h: 1,
    w: 1,
  },
  {
    id: "h",
    filter: ["移动"],
    row: 1,
    col: 3,
    h: 1,
    w: 1,
  },
];

enum getImgSrc {
  a = "images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg",
  b = "images/photo-of-imac-near-macbook-1029757.jpg",
  c = "images/apple-laptop-notebook-office-39284.jpg",
  d = "images/apple-apple-device-design-desk-285814.jpg",
  e = "images/person-using-black-and-white-smartphone-and-holding-blue-230544.jpg",
  f = "images/person-holding-a-smartphone-892757.jpg",
  g = "images/blur-close-up-code-computer-546819.jpg",
  h = "images/bokeh-photography-of-person-holding-turned-on-iphone-1440727.jpg",
}

const filtersDefault = [
  { label: "all", isChecked: true, text: "全部" },
  { label: "WEB", isChecked: false, text: "WEB" },
  { label: "移动", isChecked: false, text: "移动" },
  { label: "科研", isChecked: false, text: "科研" },
];

function SuccessCases() {
  // const [btnList, setBtnList] = useState(btnListInfo);
  const [filters, updateFilters] = useState(filtersDefault);
  const { height, width } = useWindowDimensions();

  const onClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    // const _btnList: {
    //   label: string;
    //   key: number;
    //   active: boolean;
    //   filter: string[];
    // }[] = [];
    // btnList.forEach((btn) => {
    //   _btnList.push({ ...btn, active: false });
    // });
    // _btnList[key].active = true;
    // setBtnList(_btnList);
    updateFilters((prevState) =>
      prevState.map((f) => {
        return {
          ...f,
          isChecked: f.label === prevState[index].label,
        };
      })
    );
  };

  return (
    <ShowCases>
      <Title>成功案例</Title>
      <FilterBtns className="filter-container">
        {filters.map((f, index) => (
          <FilterBtn
            active={f.isChecked}
            key={f.label}
            onClick={(e) => onClick(e, index)}
          >
            {f.text}
          </FilterBtn>
        ))}
      </FilterBtns>
      <Cases height={((width + 25) / (4 * 1.25)) * 2}>
        <IsoTopeGrid
          gridLayout={imgsDefault}
          noOfCols={4} // number of columns show in one row
          unitWidth={(width - 20) / 4} // card width of 1 unit
          unitHeight={(width - 20) / (4 * 1.25)} // card height of 1 unit
          filters={filters}
        >
          {imgsDefault.map((img) => (
            <div key={img.id} className={`case-item ${img.filter[0]}`}>
              <img
                src={getImgSrc[img.id as keyof typeof getImgSrc]}
                alt=""
              ></img>
            </div>
          ))}
        </IsoTopeGrid>
      </Cases>

      {/* <div className="caseItem">
          <img
            src="images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg"
            alt=""
          />
        </div>
        <div className="caseItem">
          <img src="images/photo-of-imac-near-macbook-1029757.jpg" alt="" />
        </div>
        <div className="caseItem">
          <img src="images/apple-laptop-notebook-office-39284.jpg" alt="" />
        </div>
        <div className="caseItem">
          <img src="images/apple-apple-device-design-desk-285814.jpg" alt="" />
        </div>
        <div className="caseItem">
          <img
            src="images/person-using-black-and-white-smartphone-and-holding-blue-230544.jpg"
            alt=""
          />
        </div>
        <div className="caseItem">
          <img src="images/person-holding-a-smartphone-892757.jpg" alt="" />
        </div>
        <div className="caseItem">
          <img src="images/blur-close-up-code-computer-546819.jpg" alt="" />
        </div>
        <div className="caseItem">
          <img
            src="images/bokeh-photography-of-person-holding-turned-on-iphone-1440727.jpg"
            alt=""
          />
        </div> */}
    </ShowCases>
  );
}

export default SuccessCases;
