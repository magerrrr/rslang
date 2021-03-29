import * as React from 'react';

const Levels = ({ onChangeLevel}: any) => {

const levels = [1, 2, 3, 4, 5,6];

return (

<select
              className="custom-select text-primary"
              defaultValue={levels[0]}
            >
              {levels.map((level, index) => (
                <option
                  value={level}
                  key={index + 500}
                  className="dropdown-item"
                  onClick={onChangeLevel}
                >
                  {level}
                </option>
              ))}
            </select>

);

};

export default Levels;
