import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
// import "./styles.css";

const Row = ({ index, style }) => (
  <div className='odd:bg-gray-100 even:bg-transparent py-2 px-4 ' style={style}>
    Row {index}
  </div>
);
const VirtualizedList = () => {
    return (
      <div className="border-2 border-red-600 mb-20 h-[50vh] mt-5" >
        virtualizedList
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List  "
              height={150}
              itemCount={1000}
              itemSize={35}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    );
  };
  
  export default VirtualizedList;