import {ProgressCircleWrapper} from "./utilityStyles"

type ProgressCircleProp = {
    percentage: number
}

const ProgressCircle = ({percentage}: ProgressCircleProp) => {


  return (
    <ProgressCircleWrapper>
      <div className="percentage">
        <svg>
          <circle cx="20" cy="20" r="20"></circle>
          <circle style={{strokeDashoffset: 42 * percentage}} cx="20" cy="20" r="20"></circle>
        </svg>
      </div>
    </ProgressCircleWrapper>
  );
}

export default ProgressCircle