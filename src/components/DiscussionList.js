import React, { useEffect } from "react";
import { getAllDiscussion } from "../redux/slice/discussionSlice";
import { getSingleDiscussion } from "../redux/slice/discussionDetails";
import { getCommentsForSpecificId } from "../redux/slice/getSingleIdComment";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Avatar, List } from "antd";
import { useNavigate } from "react-router-dom";

const DiscussionList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.getAllDiscussion);

  useEffect(() => {
    dispatch(getAllDiscussion());
  }, [dispatch]);
  const HandleOpenSingleDiscussion = (item) => {
    dispatch(getSingleDiscussion(item._id));
    dispatch(getCommentsForSpecificId(item._id));
    navigate("/discussionDetails");
  };
  return (
    <div>
      {!status ? (
        <>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={
                    <span
                      className="cursor-pointer"
                      onClick={() => HandleOpenSingleDiscussion(item)}
                    >
                      {item.title}
                    </span>
                  }
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </>
      ) : (
        <>Loading....</>
      )}
    </div>
  );
};

export default DiscussionList;
