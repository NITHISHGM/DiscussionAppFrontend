import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Avatar, List } from "antd";
import { isEmpty } from "lodash";

const DiscussionDetails = () => {
  const { data, status } = useSelector((state) => state.getSingleDiscussion);
  const { SingleIDCommentStatus, SingleIDCommentData } = useSelector(
    (state) => state.getCommentsForSpecificId
  );

  return (
    <>
      {!status && !isEmpty(data) ? (
        <>
          {console.log(
            "SingleIDCommentStatus, SingleIDCommentData",
            SingleIDCommentStatus,
            SingleIDCommentData
          )}
          <Card title={data.title}>
            <Row>
              <Col span={24}>
                {" "}
                <div className="float-right">{data.createdAt}</div>
              </Col>
              <Col span={24}>{data.content}</Col>
            </Row>
          </Card>
          <Row className="p-5">
            <Col span={24}>
              {!SingleIDCommentStatus ? (
                <>
                  <List
                    itemLayout="horizontal"
                    dataSource={SingleIDCommentData}
                    renderItem={(item, index) => (
                      <List.Item className="p-4">
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />
                          }
                          title={
                            <span className="cursor-pointer">{item.title}</span>
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
            </Col>
          </Row>
        </>
      ) : (
        <>Loading ... </>
      )}
    </>
  );
};

export default DiscussionDetails;
