import { Avatar, Rating } from "@mui/material";
import { MdOutlineStar } from "react-icons/md";
import { CustomerReviewData } from "@/utils/common";
import { Fragment } from "react";

const CustomerReview = () => {
  return (
    <div>
      <p className="font-bold text-2xl">Customer&apos;s Feedback</p>
      <div
        className="h-[475px] overflow-y-scroll
      "
      >
        {CustomerReviewData.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div className="flex flex-col my-6">
                <div className="flex items-center gap-x-4">
                  <Avatar alt="profile_pic" src={item.pic} />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
                <div className="my-1">
                  <Rating
                    name="any"
                    value={item.rating}
                    size="large"
                    readOnly
                    emptyIcon={<MdOutlineStar className="text-white" />}
                  />
                </div>
                <div className="text-sm text-opacity-60 text-white my-1 mb-4">
                  {item.briefs}
                </div>
                <hr className="border-opacity-20 border-white" />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
